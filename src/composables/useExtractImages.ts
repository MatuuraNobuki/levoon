// useExtractImages.ts
import JSZip from 'jszip'

export async function extractImagesFromArrayBufferZip(buffer: ArrayBuffer): Promise<string[]> {
  const zip = await JSZip.loadAsync(buffer)

  const imageUrls: string[] = []

  for (const [filename, file] of Object.entries(zip.files)) {
    if (!file.dir && /\.(png|jpe?g|gif|bmp)$/i.test(filename)) {
      const blob = await file.async('blob')
      const url = URL.createObjectURL(blob)
      imageUrls.push(url)
    }
  }

  return imageUrls
}
