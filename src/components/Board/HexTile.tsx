import Image from "next/image";

export default function Button({ label, width, height, image_path }: { label: string, width: number, height: number, image_path: string}) { 
    return (
        <Image src={image_path} alt="Description" width={width} height={height} className="relative"/>
    )
 }