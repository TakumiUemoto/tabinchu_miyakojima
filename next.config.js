/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    Optimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_generateAndUseBlurImages: 'false',
    nextImageExportOptimizer_remoteImageCacheTTL: '2592000', // 1m
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['next-image-export-optimizer'],
  images: {
    loader: 'custom',
    imageSizes: [10, 16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [420, 820, 1200],
  },
};

module.exports = nextConfig;
