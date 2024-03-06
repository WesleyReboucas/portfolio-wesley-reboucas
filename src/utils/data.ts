export interface ImageItem {
  src: string
  alt: string
  ribbon?: string
  githubLink?: string
  siteLink?: string
}

export const images: ImageItem[] = [
  {
    src: '/images/vollmed-banner.png',
    alt: 'Image 1',
    ribbon: 'IOS',
    githubLink: 'https://github.com/link-1',
    siteLink: 'https://site-1.com',
  },
  {
    src: '/images/vollmed-github.jpeg',
    alt: 'Image 2',
    ribbon: 'React Native',
    githubLink: 'https://github.com/link-2',
    siteLink: 'https://site-2.com',
  },
  {
    src: '/images/vollmed-banner.png',
    alt: 'Image 2',
    ribbon: 'React Js',
    githubLink: 'https://github.com/link-2',
    siteLink: 'https://site-2.com',
  },
  {
    src: '/images/vollmed-github.jpeg',
    alt: 'Image 2',
    ribbon: 'Android',
    githubLink: 'https://github.com/link-2',
    siteLink: 'https://site-2.com',
  },
  {
    src: '/images/vollmed-banner.png',
    alt: 'Image 2',
    ribbon: 'NodeJs',
    githubLink: 'https://github.com/link-2',
    siteLink: 'https://site-2.com',
  },
]
