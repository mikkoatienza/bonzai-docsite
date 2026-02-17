import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: [
    '@fluentui/font-icons-mdl2',
    '@fluentui/style-utilities',
    '@fluentui/utilities',
    '@fluentui/merge-styles',
    '@fluentui/dom-utilities',
  ],
  webpack: (config) => {
    // Work around occasional webpack export analysis issues in some CommonJS packages.
    // (This docsite favors reliability over aggressive tree-shaking.)
    if (config.optimization) {
      config.optimization.usedExports = false;
    }
    return config;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);

