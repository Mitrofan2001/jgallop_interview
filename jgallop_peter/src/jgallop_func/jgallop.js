import AsNavFor from './comp_AsNavfor/AsNavFor';
import Banner from './comp_Banner/Banner'
import Destination from './comp_Destination/Destination';
import TripName from './comp_TripName/TripName';
import './style.css'


function Funja(){
    return(
        <>
            <Banner/>
            <Destination/>
            <AsNavFor/>
            <TripName/>
            <footer className='h-[250px] bg-[#e5e5e5]'>
                <div className=''>
                    <div>Funja</div>
                    <div>認識放假去</div>
                    <div>中橋學旅</div>
                </div>
            </footer>
        </>
    )
}

export default Funja;