interface Env {
  WEDDING_PASSWORDS: string;
  PASSWORD_RATE_LIMITER: RateLimit;
}

const ALLOWED_ORIGINS = new Set([
  'https://thekleinicks.com',
  'https://www.thekleinicks.com',
]);

function corsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json',
    Vary: 'Origin',
  };
}

async function digest(value: string) {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)));
}

function sameDigest(left: Uint8Array, right: Uint8Array) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left[index] ^ right[index];
  return difference === 0;
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin') ?? '';
    const headers = corsHeaders(origin);

    if (!ALLOWED_ORIGINS.has(origin)) {
      return new Response(JSON.stringify({ ok: false }), { status: 403, headers });
    }

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    if (request.method !== 'POST' || new URL(request.url).pathname !== '/verify') {
      return new Response(JSON.stringify({ ok: false }), { status: 404, headers });
    }

    let password = '';
    try {
      const body = await request.json() as { password?: unknown };
      if (typeof body.password === 'string') password = body.password.trim().toLowerCase();
    } catch {
      return new Response(JSON.stringify({ ok: false }), { status: 400, headers });
    }

    if (!password || password.length > 128) {
      return new Response(JSON.stringify({ ok: false }), { status: 401, headers });
    }

    const rateLimitKey = request.headers.get('CF-Connecting-IP') ?? 'unknown';
    const { success } = await env.PASSWORD_RATE_LIMITER.limit({ key: rateLimitKey });
    if (!success) {
      return new Response(JSON.stringify({ ok: false }), { status: 429, headers });
    }

    const candidate = await digest(password);
    const accepted = env.WEDDING_PASSWORDS
      .split('\n')
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean);

    let valid = false;
    for (const value of accepted) valid = sameDigest(candidate, await digest(value)) || valid;

    return new Response(JSON.stringify({ ok: valid }), { status: valid ? 200 : 401, headers });
  },
};

export default worker;
