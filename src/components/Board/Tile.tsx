import Image from 'next/image'

export default function Tile({
  label,
  size,
  image_path,
}: {
  label: string
  size: number
  image_path: string
}) {
  return (
    <Image
      src={image_path}
      alt='Description'
      width={size}
      height={size}
      className='relative'
    />
  )
}
