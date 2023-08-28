import AsNavFor from './comp_AsNavfor/AsNavFor';
import Banner from './comp_Banner/Banner'
import Destination from './comp_Destination/Destination';
import TripName from './comp_TripName/TripName';
import './style.css'

/* svg */
import Footer_icon from './images/index/Logo.svg';

function Funja(){
    return(
        <>
            <header>

            </header>
            <Banner/>
            <Destination/>
            <AsNavFor/>
            <TripName/>

            {/* Last Second */}
            <div className='bg__whyfun overflow-hidden text-center '>
                <div className='mx-[22px] pt-[42px] lg:pt-[88px] font-bold'>
                    <div className='mb-[18px] lg:mb-[32px] text-white text-[32px] lg:text-[44px]'><span className='LastSecond'>為何要選擇放假趣?</span></div>
                    <div className='mb-[40px] lg:mb-[40px] h-[384px] lg:h-[300px] text-[18px] overflow-hidden break-normal lg:text-[16px] lg:font-black lg:font-[微軟正黑體] leading-6 lg:leading-[24px]'>
                        我們為期3週在美國波士頓費雪大學舉辦的籃球夏令營, <br className='hidden lg:inline'/>
                        將籃球技巧的精進與語言能力的學習結合,讓您能在學習英文的同時,<br className='hidden lg:inline'/>
                        可以不間斷地強化自己的興趣。每天下午，學生們將接受各種籃球技能訓練包括上籃、跳 <br className='hidden lg:inline'/>
                        投, 以及個人或團隊的防禦技巧等。 美國當地學生也會適時加入我們的球類競賽, 和我們的學生 <br className='hidden lg:inline'/>
                        一起切磋技術。我們的活動中, 還包含參觀 NBA東區塞爾提克隊(Boston Celtics) 的家鄉波士 <br className='hidden lg:inline'/>
                        頓市、塞爾提克隊的主場TD北岸花園球館 (TD Garden), 以及其他著名的景點的遊覽 <br className='hidden lg:inline'/>
                        我們為期3週在美國波士頓費雪大學舉辦的籃球夏令營, <br className='hidden lg:inline'/> 
                        將籃球技巧的精進與語言能力的學習結合,讓您能在學習英文的同時, <br className='hidden lg:inline'/>
                        可以不間斷地強化自己的興趣。每天下午，學生們將接受各種籃球技能訓練包括上籃、跳 <br className='hidden lg:inline'/>
                        投,以及個人或團隊的防禦技巧等。美國當地學生也會適時加入我們的球類競賽,和我們的學生<br className='hidden lg:inline'/>
                        一起切磋技術。我們的活動中,還包含參觀 NBA東區塞爾提克隊(Boston Celtics) 的家鄉波士 <br className='hidden lg:inline'/>
                        頓市、塞爾提克隊的主場TD北岸花園球館 (TD Garden), 以及其他著名的景點的遊覽
                    </div>
                    <div className='mb-[80px] lg:mb-[95px]'>
                        <div className='rounded-full bg-white py-[12px] lg:py-2 w-[320px] lg:w-[210px] mx-auto text-[18px] lg:text-[16px]'>
                            了解更多
                        </div>                    
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className='h-[275px] lg:h-[222px] bg-[#e5e5e5] '>

                <div className='hidden lg:block max-w-[900px] mx-auto pl-[30px] py-[50px]'>{/* notebook &desktop */}
                    <div className='flex'>
                        <div><img className='w-[110px]' src={Footer_icon} alt="Footer_logo" /></div>

                        <div className='ml-10 pr-10 mr-10 border-r-[1px] border-gray-300'>
                            <div className='flex font-bold'>
                                <div className='pr-4'>
                                    <div className='font-bold text-[14px] mb-1'>認識放假趣</div>
                                    <div className='text-[14px] text-gray-500'>
                                        <div className='cursor-pointer'>關於放假趣</div>
                                        <div className='cursor-pointer'>常見問題與幫助</div>
                                    </div>
                                </div>

                                <div className='pr-4'>
                                    <div className='font-bold text-[14px] mb-1'>網站條款</div>
                                    <div className='text-[14px] text-gray-500'>
                                        <div className='cursor-pointer'>服務條款</div>
                                        <div className='cursor-pointer'>隱私政策</div>
                                    </div>
                                </div>
                                <div className='pr-4'>
                                    <div className='font-bold text-[14px] mb-1'>聯絡我們</div>
                                </div>
                                <div>
                                    <div className='font-bold text-[14px] mb-1'>支付方式</div>
                                </div>
                            </div>

                            <div className='text-left mt-9 text-[12px] text-gray-600'>COPYRIGHT © 2018 FUNJATRIP All rights reserved.</div>
                        </div>

                        <div>
                            <div className='font-bold text-[14px]'>中僑學旅股份有限公司</div>
                            <div className='text-[12px] leading-4 text-gray-600'>甲種旅遊業 XXX第NNNN號</div>

                            <div className='text-[12px] mt-4 text-gray-500 font-bold'>
                                地址: 中國上海市黃浦區五里橋街道蒙自路757號歌斐中心<br/>
                                電話: 012345678<br/>
                                e-mail: funja@funja.com<br/>
                                代表人: 放先生<br/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden'>{/*mobile*/}
                    <div className='pt-[35px] mx-auto'>
                        <div className='mx-auto flex w-[325px]'>
                        <div className='pr-6'><img className='w-[100px]' src={Footer_icon} alt="Footer_logo" /></div>

                        <div className='pt-[14px] '>
                            <div className='font-bold text-[20px]'>中僑學旅股份有限公司</div>
                            <div className='text-[15px] leading-4 text-gray-600'>甲種旅遊業 XXX第NNNN號</div>
                        </div>
                        </div>
                    </div>

                    <div className='text-center text-[15px] pt-5 pb-3 leading-[25px] text-gray-600'>
                            <div>地址：中國上海市黃浦區五里橋街道蒙自路757號歌斐中心</div>
                            <div> 電話：012345678  代表人：放先生</div>
                            <div>e-mail：funja@funja.com</div>
                    </div>
                    <div className='text-center text-[16px] text-gray-600'>COPYRIGHT © 2018 FUNJATRIP All rights reserved.</div>
                </div>

                
            </footer>
        </>
    )
}

export default Funja;