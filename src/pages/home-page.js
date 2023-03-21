import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css/skyblue';
import MtnDataBundle from "../components/mtn-data-bundle"  
import ladysmiling from "../images/Lady-smiling.jpeg"
import sanusuHakeem from "../images/sanusi hakeem (2).jpg"
import AbbasJoda from "../images/Abbas Joda.jpg"
import AbdullahTaiwo from "../images/Abdullah Taiwo.jpg"
import AbdulHamidOyebo from "../images/Abdulhamid-Oyebo.jpeg"
import { Splide } from '@splidejs/react-splide';
import Testimonial from "../components/testimony"
import RunningManIcon from '../icon/RunningManIcon';
import SecureShieldIcon from '../icon/SecureShieldIcon';
export default function HomePage() {
  const mouseEnter1 = (id1,id2) => {
const idd1 = document.getElementById(id1);
idd1.classList.remove('bg-zinc-300');
idd1.classList.add('bg-blue-900');   
const idd2 = document.getElementById(id2); 
idd2.classList.remove('hidden')
  }
  const mouseLeave1 = (id1,id2) => {
    const idd1 = document.getElementById(id1);
idd1.classList.add('bg-zinc-300');
idd1.classList.remove('bg-blue-900');   
const idd2 = document.getElementById(id2); 
idd2.classList.add('hidden')
  }
  const toggleMenu = () => {
    const menuList = document.getElementById("menuList");
      if(menuList.classList.contains('hidden')){
        menuList.classList.remove("hidden");
        menuList.classList.add("flex");
      }
      else{
        menuList.classList.remove('flex');
        menuList.classList.add('hidden')
      }
    
  }
    return ( 
<div className="bg-[aliceblue] py-2">
      <h1 className="text-3xl font-bold my-5 text-blue-900 text-center">
        VTURECHARGE
      </h1>
      <div className="bg-blue-900 p-7">
        <div className='cursor-pointer text-white mb-5 lg:hidden' onClick={toggleMenu}>
        <div className="w-3 h-3 mx-auto inline-block mr-3 border border-white">
                </div>
          Menu
        </div>
       <div className='flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-12 text-white hidden lg:flex' id='menuList'>
        <div className="home-link">HOME</div>
        <a className="home-link" href='#aboutUs'>ABOUT US</a>
        <a className="home-link" href='#services'>SERVICES</a>
        <Link to='/login' className="home-link">LOGIN</Link>
        <Link to='/register' className="home-link">REGISTER</Link>
        </div>
      </div>
      <div className='bg-image h-[500px] py-32 px-10 lg:px-20'>  
      <p className="text-yellow-300 my-2  font-bold">WELCOME TO VTURECHARGE</p>
      <p className="text-zinc-300 text-3xl lg:text-[50px] font-extrabold leading-none lg:w-3/6">Vturecharge for everyone</p>
      <p className="my-8 text-white text-xl font-extrabold">Buy cheap and affordable plan.</p>
      <div className="flex space-x-5">
        <Link to='/register' className="bg-blue-900 p-2 rounded-md cursor-pointer text-white">Register Now !</Link>
        <Link to='/login' className="bg-yellow-300 p-3 cursor-pointer">Login
        <div className="ml-1 w-3 h-3  border border-white inline-block"></div>
         </Link>
      </div>
      </div> 
      <div className="grid grid-cols-1 lg:grid-cols-3 m-10 justify-evenly lg:space-x-8 space-y-6 lg:space-y-0">
        <div className="bg-white relative pt-8"  onMouseEnter={() => mouseEnter1("reliability","box1")} onMouseLeave={() => mouseLeave1("reliability","box1")}>
            <div className="bg-zinc-300 p-2 h-28 rounded-[50%] w-28  mx-auto" id="reliability">
            <svg className="w-2/3 mx-auto pt-5" viewBox="0 0 464 464.00048" xmlns="http://www.w3.org/2000/svg"><path d="m464 432h-64l8-144h56zm0 0" fill="#5d9aa4"/><path d="m464 432h-64l8-16h56zm0 0" fill="#3b869e"/><path d="m160 424c-98.058594-49.03125-159.99609375-149.253906-160-258.886719v-117.113281l160-48 160 48v117.113281c0 109.632813-61.941406 209.855469-160 258.886719zm0 0" fill="#c3c3c3"/><path d="m60.359375 341.753906c26.582031 34.582032 60.644531 62.703125 99.640625 82.246094 98.058594-49.03125 160-149.253906 160-258.886719v-117.113281l-50.3125-15.097656c-39.371094 120.574218-111.917969 227.613281-209.328125 308.851562zm0 0" fill="#cbcbcb"/><path d="m180.152344 331.046875-20.152344 12.953125-20.152344-12.953125c-57.246094-36.800781-91.847656-100.183594-91.847656-168.238281v-74.808594l112-40 112 32v82.808594c0 68.054687-34.601562 131.4375-91.847656 168.238281zm0 0" fill="#dbdbdb"/><path d="m104.167969 301.664062c10.71875 11.140626 22.691406 21 35.679687 29.382813l20.152344 12.953125 20.152344-12.953125c57.246094-36.800781 91.847656-100.183594 91.847656-168.238281v-82.808594l-17.601562-5.039062c-34.171876 84.980468-85.285157 162.113281-150.230469 226.703124zm0 0" fill="#dedede"/><path d="m368 272-16-40v-28c0-15.464844-12.535156-28-28-28s-28 12.535156-28 28v21.839844c0 4.070312.777344 8.101562 2.289062 11.878906l13.710938 34.28125h-104c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24h8c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24h8c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24h6v.199219c-12.851562.996093-22.605469 11.988281-22.066406 24.867187.539062 12.875 11.179687 23.015625 24.066406 22.933594h136l48-32v-144zm0 0" fill="#f6bb92"/><path d="m352 232v-28c0-15.464844-12.535156-28-28-28s-28 12.535156-28 28v21.839844c0 4.070312.777344 8.101562 2.289062 11.878906l13.710938 34.28125h-104c-12.445312.027344-22.792969 9.585938-23.800781 21.992188 0 1.601562.074219 3.289062.113281 5.097656 1.511719 11.933594 11.65625 20.890625 23.6875 20.910156h8c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24h8c-13.253906 0-24 10.746094-24 24s10.746094 24 24 24h6v.199219c-7.429688.515625-14.183594 4.503906-18.222656 10.761719-4.039063 6.257812-4.894532 14.054687-2.304688 21.039062h158.527344l48-32v-128l-48-16zm0 0" fill="#fdc9a6"/><path d="m439 259.878906-14-7.757812c1.445312-2.59375 2.792969-5.242188 4.039062-7.953125l14.527344 6.6875c-1.40625 3.082031-2.941406 6.089843-4.566406 9.023437zm10.695312-24.863281-15.246093-4.800781c1.503906-4.761719 2.707031-9.617188 3.597656-14.535156l15.746094 2.863281c-1.019531 5.574219-2.386719 11.074219-4.097657 16.472656zm6.089844-33.351563-16-.921874c.128906-2.230469.191406-4.484376.191406-6.75 0-2.773438-.09375-5.519532-.28125-8.238282l15.960938-1.082031c.207031 3.082031.316406 6.191406.320312 9.320313.015626 2.570312-.046874 5.128906-.191406 7.671874zm-18.007812-30.785156c-.957032-4.902344-2.21875-9.742187-3.777344-14.488281l15.199219-5.007813c1.777343 5.386719 3.207031 10.882813 4.289062 16.449219zm-9.351563-28.382812c-2.152343-4.507813-4.578125-8.878906-7.265625-13.089844l13.472656-8.605469c3.054688 4.769531 5.804688 9.730469 8.238282 14.847657zm-16.121093-25.183594c-3.195313-3.851562-6.628907-7.496094-10.28125-10.914062l10.9375-11.679688c4.136718 3.875 8.027343 8.003906 11.648437 12.359375zm-21.839844-20.464844c-4.046875-2.925781-8.269532-5.597656-12.648438-8l7.71875-14.015625c4.96875 2.738281 9.757813 5.785157 14.34375 9.121094zm-26.199219-14.398437c-4.652344-1.84375-9.414063-3.390625-14.257813-4.640625l4-15.496094c5.496094 1.410156 10.894532 3.171875 16.167969 5.261719zm0 0" fill="#8dc79d"/><path d="m400 192h-16c.066406-20.90625-12.671875-39.722656-32.113281-47.425781l-2.863281-1.148438 5.953124-14.851562 2.855469 1.144531c25.527344 10.109375 42.261719 34.824219 42.167969 62.28125zm0 0" fill="#f7ba61"/><path d="m3.097656 207.070312 316.902344-95.070312v-32l-319.625 95.886719c.34375 10.4375 1.253906 20.847656 2.722656 31.183593zm0 0" fill="#5d9aa4"/><path d="m272 94.398438-224 67.203124v1.207032c.039062 10.070312.84375 20.128906 2.398438 30.078125l221.601562-66.488281zm0 0" fill="#60a0aa"/><path d="m9.289062 237.214844 310.710938-93.214844v-32l-316.902344 95.070312c1.523438 10.152344 3.589844 20.214844 6.191406 30.144532zm0 0" fill="#e06661"/><path d="m57.265625 222.824219 214.734375-64.425781v-32l-221.601562 66.488281c1.519531 10.140625 3.8125 20.148437 6.867187 29.9375zm0 0" fill="#ea6b65"/></svg>
            </div>
            <p className="text-center my-3 text-lg font-black">We're Fast</p>
            <div className="text-lg text-zinc-700  px-12 pb-10">
            Our data delivery and wallet funding are automated, as are airtime topup and data purchases, which are supplied to you practically instantaneously...
            </div>
            <div className="bg-blue-900 absolute hidden left-1/2  -bottom-5 w-12 h-12 rounded-[50%]" id="box1">
                <div className="w-3 h-3 mx-auto mt-5 border border-white">
                </div>
            </div>
        </div>

        <div className="bg-white relative pt-8"  onMouseEnter={() => mouseEnter1("runningman","box2")} onMouseLeave={() => mouseLeave1("runningman","box2")}>
            <div className="bg-zinc-300 p-2 h-28 rounded-[50%] w-28  mx-auto" id="runningman"> 
<RunningManIcon className="w-2/3 mx-auto pt-5" />
            </div>
            <p className="text-center my-3 text-lg font-black">You're Safe</p>
            <div className="text-lg text-zinc-700  px-12 pb-10">
            Your wallet is the most secure way to use your cell airtime. Your wallet funds can be held for as long as you desire and are secure...
            </div>
            <div className="bg-blue-900 absolute left-1/2 hidden -bottom-5 w-12 h-12 rounded-[50%]" id="box2">
                <div className="w-3 h-3 mx-auto mt-5 border border-white">
                </div>
            </div>
        </div>
        
        <div className="bg-white relative pt-8"  onMouseEnter={() => mouseEnter1("secure-shield","box3")} onMouseLeave={() => mouseLeave1("secure-shield","box3")}>
            <div className="bg-zinc-300 p-2 h-28 rounded-[50%] w-28  mx-auto" id="secure-shield">
{/* <img  src={securesheild} className="w-2/3 mx-auto pt-5" alt="runingman"/> */}
<SecureShieldIcon className="w-2/3 mx-auto pt-5" />
            </div>
            <p className="text-center my-3 text-lg font-black">We're Reliable</p>
            <div className="text-lg text-zinc-700  px-12 pb-10">
            We have learned over the years to be able to properly optimize our platform for dependability and durability thanks to our many years of expertise and engineers...
            </div>
            <div className="bg-blue-900 absolute left-1/2  hidden -bottom-5 w-12 h-12 rounded-[50%]" id="box3">
                <div className="w-3 h-3 mx-auto mt-5 border border-white">
                </div>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img  src={ladysmiling} alt="Lady Smiling" className="h-full p-4 lg:p-0" />
        </div>
        <div className="p-2 py-10 lg:p-14" id='services'>
        <h1 className="text-2xl lg:text-3xl mb-6  font-black">Welcome to Vturecharge</h1>
        <p className="text-zinc-700 lg:pr-10 font-semibold">We provide reasonably priced Data Bundles, Airtime Topup, Cablesub, and Energy Bill Payment.</p>
      <MtnDataBundle price={"#28"} data={"50MB"} />
      <MtnDataBundle price={"#60"} data={"160MB"} />
      <MtnDataBundle price={"#80"} data={"250MB"} />
      <MtnDataBundle price={"#120"} data={"500MB"} />
      <MtnDataBundle price={"#140"} data={"500MB"} />
      <MtnDataBundle price={"#240"} data={"1.0GB"} />
      <MtnDataBundle price={"#250"} data={"1.0GB"} />
      <MtnDataBundle price={"#270"} data={"1.0GB"} />
      <MtnDataBundle price={"#480"} data={"2.0GB"} />
      <MtnDataBundle price={"#500"} data={"2.0GB"} />
      <MtnDataBundle price={"#690"} data={"3.0GB"} />
      <MtnDataBundle price={"#720"} data={"3.0GB"} />
      <MtnDataBundle price={"#960"} data={"4.0GB"} />
      <MtnDataBundle price={"#980"} data={"4.0GB"} />
      <MtnDataBundle price={"#970"} data={"1.5GB"} />
      <MtnDataBundle price={"#1150"} data={"5.0GB"} />
      <MtnDataBundle price={"#1200"} data={"2.0GB"} />
      <MtnDataBundle price={"#1200"} data={"5.0GB"} />
      <MtnDataBundle price={"#1450"} data={"6.0GB"} />
      <MtnDataBundle price={"#1500"} data={"3.0GB"} />
      <MtnDataBundle price={"#1500"} data={"6.0GB"} />
      <MtnDataBundle price={"#1985"} data={"4.5GB"} />
      <MtnDataBundle price={"#2450"} data={"10.0GB"} />
      <MtnDataBundle price={"#2974"} data={"10.0GB"} />
      <MtnDataBundle price={"#3700"} data={"15.0GB"} />
      <MtnDataBundle price={"#4800"} data={"20.0GB"} />
      <MtnDataBundle price={"#5000"} data={"20.0GB"} />
      <MtnDataBundle price={"#9350"} data={"40.0GB"} />
      <MtnDataBundle price={"#17600"} data={"75.0GB"} />
      <MtnDataBundle price={"#18300"} data={"75.0GB"} />
      <MtnDataBundle price={"#20000"} data={"100.0GB"} />
      <MtnDataBundle price={"#24000"} data={"100.0GB"} />
       <MtnDataBundle price={"#49500"} data={"400.0GB"} />
       <MtnDataBundle price={"#96500"} data={"1.0TB"} />
       <MtnDataBundle price={"#44800"} data={"45.0TB"} />
        </div>

      </div>
      <div className="flex flex-col lg:flex-row justify-around bg-blue-900 my-10 lg:h-48 p-10 lg:p-12">
        <div className="text-white">
        <h1 className="text-3xl mb-3 font-extrabold">Contact us</h1>
        <p className="w-5/6 text-zinc-300">Do you have any comments or questions about the products then contact us.</p>
        </div>
        <div className="text-yellow-300 float-right mt-12">
          +2349067670936 olasunkanmiusman1111@gmail.com
        </div>
      </div>
      <div className="my-20 text-center">
        <h1 className="text-blue-900 text-1xl font-extrabold mb-1">Testimonial</h1>
        <h1 className="text-3xl font-bold text-zinc-700">Happy  Clients</h1>
      </div>
      <Splide options={ {
    rewind: true,
    gap   : '1rem',
    perPage: 3,
    type: 'loop',
    perMove: 1
  } } className='p-16 -mt-10 hidden lg:block'>
      <Testimonial text={" I appreciate the excellent customer service you offered. That was incredibly kind and patient with my queries. I would certainly like to return here."} occupation={"Web Developer"} image={sanusuHakeem} name={"Sanusi Hakeem"} />
      <Testimonial text={"I recommend VtuRecharge because it is the greatest platform for inexpensive data plans for both end-users and resellers and because it is quick, automatic, and safe."} occupation="Software Engineer" image={AbbasJoda} name="Abbas Joda" />
      <Testimonial text="I like how quickly concerns are resolved. We may get along just fine. Thus far, so good. There isn't a star here, yet I give it 5 stars." occupation="Web Developer" name="Abdullah Taiwo" image={AbdullahTaiwo}  />
      <Testimonial text="Excellent website, which I urge any data resellers to use for quick data delivery... Kudos" name="Oyebo Hamid" occupation="Software Developer" image={AbdulHamidOyebo} />
      </Splide>

      <Splide options={ {
    rewind: true,
    gap   : '1rem',
    perPage: 1,
    type: 'loop',
    perMove: 1,
  } } className='p-16 -mt-10 block lg:hidden'>
      <Testimonial text={" I appreciate the excellent customer service you offered. That was incredibly kind and patient with my queries. I would certainly like to return here."} occupation={"Web Developer"} image={sanusuHakeem} name={"Sanusi Hakeem"} />
      <Testimonial text={"I recommend VtuRecharge because it is the greatest platform for inexpensive data plans for both end-users and resellers and because it is quick, automatic, and safe."} occupation="Software Engineer" image={AbbasJoda} name="Abbas Joda" />
      <Testimonial text="I like how quickly concerns are resolved. We may get along just fine. Thus far, so good. There isn't a star here, yet I give it 5 stars." occupation="Web Developer" name="Abdullah Taiwo" image={AbdullahTaiwo}  />
      <Testimonial text="Excellent website, which I urge any data resellers to use for quick data delivery... Kudos" name="Oyebo Hamid" occupation="Software Developer" image={AbdulHamidOyebo} />
      </Splide>
      <div className='bg-black p-16 mt-10' id='aboutUs'>
        <div className=' flex justify-between lg:space-x-24 flex-col lg:flex-row'>
        <div className=' w-full lg:w-1/4'>
          <p className='text-zinc-300 text-lg -mb-1' >Join our whatsapp group</p>
          <p className='font-bold text-3xl mb-8'><span className='text-white'>VTU</span><span className='text-yellow-300'>RECHARGE</span></p>
          <p className='text-zinc-300 text-lg'>
      Welcome to Vturecharge, a company that deals with the sales of Affordable internet Data Plans.
          </p>
          <div className='flex justify-around mt-10'>
          <Link to='/login' className="bg-zinc-700 cursor-pointer hover:bg-zinc-800   w-12 h-12 rounded-[50%]">
                <div className="w-3 h-3 mx-auto mt-5 border border-white">
                </div>
                </Link>
          <Link to='/login' className="bg-zinc-700 cursor-pointer hover:bg-zinc-800  w-12 h-12 rounded-[50%]">
                <div className="w-3 h-3 mx-auto mt-5 border border-white">
                </div>
                </Link>
          <Link to='/login' className="bg-zinc-700 cursor-pointer hover:bg-zinc-800   w-12 h-12 rounded-[50%]">
                <div className="w-3 h-3 mx-auto mt-5 border border-white">
                </div>
                </Link>
            </div>
        </div>
        <div className='text-white lg:w-1/3'>
          <div className='text-2xl text-white my-8'>Services</div>
          <Link to='/login'>
          <div className="w-3 h-3 mx-auto inline-block mr-3 border border-white">
                </div>
            Buy Data
          </Link>
          <Link to='/login' className='mt-5 block'>
          <div className="w-3 h-3 mx-auto inline-block mr-3 border border-white">
                </div>
            Buy Airtime
          </Link>
          <Link to='/login' className='mt-5 block'>
          <div className="w-3 h-3 mx-auto inline-block mr-3 border border-white">
                </div>
            Utilities Payment
          </Link>
        </div>
        <div className='text-white'>
        <div className='text-2xl text-white my-8'>Contact information</div>
        <div>
        <div className="w-3 h-3 mx-auto inline-block mr-3 border border-white">
                </div>
          +2349067670936
        </div>
        <div className='mt-5'>
        <div className="w-3 h-3 mx-auto inline-block mr-3 border border-white">
                </div>
          +2349051682417</div>
        <div className='mt-5'> 
          olasunkanmiusman1111@gmail.com
        </div>
        </div>
        <div className='text-white'>
          <div className='text-2xl text-white my-8'>Business Hours</div>
          <div className='text-yellow-300'>Opening Days</div>
        <div className='mt-2'>Monday - Friday: 7am to 8pm</div>
        <div className='mt-2'>Note: This time is for customer services, all our services is automated 24/7 hours</div>
        </div>
        </div>
      <h1 className='text-zinc-300 mt-12 text-center lg:text-xl'>Copyright ©2023 Vturecharge</h1>
      <div className='my-10 text-center -mx-16 text-white text-lg p-3 bg-blue-900'>
        Developed by WhiteMan Developer
      </div>
      </div>
      </div>
    )
  }