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
                <div className='mx-5 pt-10 font-bold'>
                    <div className='mb-[22px] text-white text-[30px]'>為何要選擇放假趣</div>
                    <div className='mb-[42px] h-[384px] text-[20px] overflow-hidden'>
                        我們為期3週在美國波士頓費雪大學舉辦的籃球夏令營, 
                        將篮球技巧的精進與語言能力的學習結合,讓您能在學習英文的同時,
                        可以不間斷地強化自己的興趣。每天下午，學生們將接受各種籃球技能訓練包括上籃、跳 投,以及個人或團隊的防禦技巧等。
                        美國當地學生也會適時加入我們的球類競賽,和我們的學生
                        一起切磋技術。我們的活動中,還包含參觀 NBA東區塞爾提克隊(Boston Celtics) 
                        的家鄉波士 # #A 頓市、塞爾提克隊的主場TD北岸花園球館 (TD Garden),
                        以及其他著名的景點的遊覽

                        我們為期3週在美國波士頓費雪大學舉辦的籃球夏令營, 
                        將篮球技巧的精進與語言能力的學習結合,
                        讓您能在學習英文的同時, 可以不間斷地強化自己的興趣。 
                        每天下午,學生們將接受各種籃球技能的訓練,
                        包括上籃、跳 投,以及個人或團隊的防禦技巧等。 
                        美國當地學生也會適時加入我們的球類競賽,和我們的學生 
                        一起切磋技術。我們的活動中,還包含參觀 NBA東區塞爾提克隊(Boston Celtics) 
                        的家鄉波士 # #A 頓市、塞爾提克隊的主場TD北岸花園球館 (TD Garden), 
                        以及其他著名的景點的遊覽 
                    </div>
                    <div className='mb-[75px]'>
                        <div className='rounded-full bg-white py-[14px] w-[320px] mx-auto text-[16px] '>
                            了解更多
                        </div>                    
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className='h-[275px] bg-[#e5e5e5]'>
                <div className='pt-[60px] max-w-4xl mx-auto flex'>
                    <div><img src={Footer_icon} alt="Footer_logo" /></div>

                    <div>認識放假去</div>

                    <div>
                        中橋學旅股份有限公司

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Funja;