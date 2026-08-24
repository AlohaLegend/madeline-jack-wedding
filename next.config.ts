import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  basePath: isGitHubPages ? '/madeline-jack-wedding' : '',
  assetPrefix: isGitHubPages ? '/madeline-jack-wedding' : '',
  images: { unoptimized: isGitHubPages },
};

export default nextConfig;
