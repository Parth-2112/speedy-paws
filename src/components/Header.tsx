// import paw from '/pawsvg.svg';
// import Dada from '/Dada.svg';
import { KeyboardIcon } from '../assets/Icons';


const Header = () => {
    return(
        <div className="text-(--primary-text-color) bg-(--primary-bg-color) flex gap-2 items-center w-full px-2">

            <div className='w-8 h-8 flex items-center'> 
                <KeyboardIcon/>
            </div>
            <div className='text-2xl font-medium'>
                speedypaws 
            </div>
            <div className="hiconset w-[50%] ">
                this is div 
            </div>  
            <div className='hidden md:block seticons ml-auto'>
                Section
            </div>
        
        </div>
    )
}

export default Header