export function isGifImage(imageUrl: string) {
  return /^(?!data:).*\.gif/i.test(imageUrl)
}

export const firstGifFrameUrl = (img) => {
  const canvas = document.createElement('canvas')
  if (typeof canvas.getContext !== 'function') {
    return null
  }
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  return canvas.toDataURL()
}

// create the image with a src of the base64 string
export const createImage = (url: string) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossorigin', 'anonymous')
    image.src = url
  })
