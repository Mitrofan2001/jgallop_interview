import './style.css'
import Slider from "react-slick";
import BannerSearch_icon from "../images/icon/search.svg";

export default function Banner(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
    
      return (
        <div className=''>
          <Slider {...settings}>
            <div className='bg__AllBanner bg__banner1 pt-[300px] text-center'>
              <div className='hidden lg:inline-block text-center'>
                    <div className='text-white Banner__solgan text-[40px] mb-2'>開始安排一個令人難忘的假期</div>   
                    <div className='inline-block relative'>
                        <input className='Banner__input rounded-full w-[450px] h-[50px] px-6 text-[14px] relative' placeholder="輸入國家、城市、學校或課程名稱..."></input>
                        <div className='Banner__search w-[47px] h-[47px] bg-[#fdc22a] rounded-full p-[12px] cursor-pointer' > <img className='w-[26px]' src={BannerSearch_icon} alt="Footer_logo" /> </div>
                    </div>
              </div>
            </div>

            <div className='bg__AllBanner bg__banner1 pt-[300px] text-center'>
                <div className='hidden lg:inline-block text-center'>
                    <div className='text-white Banner__solgan text-[40px] mb-2'>開始安排一個令人難忘的假期</div>   
                    <div className='inline-block relative'>
                        <input className='Banner__input rounded-full w-[450px] h-[50px] px-6 text-[14px] relative' placeholder="輸入國家、城市、學校或課程名稱..."></input>
                        <div className='Banner__search w-[47px] h-[47px] bg-[#fdc22a] rounded-full p-[12px] cursor-pointer' > <img className='w-[26px]' src={BannerSearch_icon} alt="Footer_logo" /> </div>
                    </div>
                </div>
            </div>

            <div className='bg__AllBanner bg__banner1 pt-[300px] text-center'>
                <div className='hidden lg:inline-block text-center'>
                    <div className='text-white Banner__solgan text-[40px] mb-2'>開始安排一個令人難忘的假期</div>   
                    <div className='inline-block relative'>
                        <input className='Banner__input rounded-full w-[450px] h-[50px] px-6 text-[14px] relative' placeholder="輸入國家、城市、學校或課程名稱..."></input>
                        <div className='Banner__search w-[47px] h-[47px] bg-[#fdc22a] rounded-full p-[12px] cursor-pointer' > <img className='w-[26px]' src={BannerSearch_icon} alt="Footer_logo" /> </div>
                    </div>
               </div>
            </div>

          </Slider>
        </div>
      );
}