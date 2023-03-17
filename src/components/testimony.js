import { SplideSlide } from "@splidejs/react-splide";
const Testimonial = ({image, text, occupation, name}) => {
    return       <SplideSlide className="bg-white p-10 h-68 cursor-grab ">
    <div className="text-zinc-500  text-lg"> 
    {text}
    </div>
    <div className="mt-8 flex flex-col md:flex-row md:space-x-10 space-y-8 md:space-y-0">
      <div>
        <img src={image} alt='sanusi Hakeem' className="w-24 h-20" />
      </div>
      <div>
        <h1 className="text-xl text-zinc-700 font-bold"> {name} </h1>
        <h1 className="text-blue-900 font-extrabold">{occupation}</h1>
      </div>
    </div>
  </SplideSlide>
}
export default Testimonial;