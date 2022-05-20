import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'zm1dihbj',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'skMENYguscLaCxW6CUmIVS71AwtoxvbzvSk1V7z6gEclMqp2bT2083fXeN8HduT9Et6KCvP4X8t9EEyRzIAHyLCylvAccsxUzWcdRCHTBoNcbPbhQJjVo1VjlZjBs7SEL3AcNLhmEZnqqtjqUZFsMtiX0qfvVugXwjmYCNOjzZVCTHa1L2Mf',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
