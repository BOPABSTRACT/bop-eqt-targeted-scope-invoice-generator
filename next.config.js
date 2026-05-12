/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['exceljs', 'jspdf', 'jspdf-autotable']
  }
}

module.exports = nextConfig
