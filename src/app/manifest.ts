import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gujranwala Child Education Program Society',
    short_name: 'GCEP',
    description: 'A Progressive Web App for Gujranwala Child Education Program Society',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1c458b',
    icons: [
      {
        src: '/logox.png',
        sizes: '500x500',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logox-144.png',
        sizes: '144x144',
        type: 'image/png',
      },
    ],
  }
}