import Button from "../Button";

interface IImageBtnContainer {
    large_cover_image?: string;
    title?: string;
}

export default function ImageBtnContainer({large_cover_image, title}: IImageBtnContainer) {
  return (
    <div className="flex flex-col w-64 gap-2">
        <img src={large_cover_image} alt={title} 
        //261 390
        className="border-4 border-white rounded sm "/>
        <Button>Download</Button>
        <Button className="bg-[rgb(10,173,158)]">Watch Now</Button>
    </div>
  )
}