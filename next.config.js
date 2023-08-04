/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  // compress: false,
  output: 'export',
  // experimental: {
	// 	esmExternals: false, // optional
	// 	externalDir: true, // optional
	// 	outputFileTracingRoot: path.join(__dirname, '../../'), // monorepo option
	// }
}

module.exports = nextConfig
