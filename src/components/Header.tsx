// import paw from '/pawsvg.svg';
// import Dada from '/Dada.svg';
import { KeyboardIcon, KeyboardSecondIcon, Profile, Bell, Crown, Info, Settings} from '../assets/Icons';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return(

        <div className="text-(--primary-text-color) bg-(--primary-bg-color) flex gap-2 items-center w-full px-2 fill-(--iconstext-color)">

            <Link to='/' className='w-10 pt-1 flex items-center hover:fill-(--iconstext-color-hover)'> 
                <KeyboardIcon/>
            </Link>

            <div className='hidden md:block text-4xl hover:fill-(--iconstext-color-hover)'>
                speedypaws 
            </div>
             

            <div className="w-[50%] flex items-center gap-6 ml-6 pt-3">
                
                <Link to='/' className='w-5 flex items-center hover:fill-(--iconstext-color-hover) cursor-pointer' title='Home'> 
                    <KeyboardSecondIcon/>
                </Link>
                <button className='w-5 flex items-center hover:fill-(--iconstext-color-hover) cursor-pointer' title='Leaderboard'> 
                    <Crown/>
                </button>
                <div className='w-1.5 h-auto flex items-center hover:fill-(--iconstext-color-hover) cursor-pointer'> 
                    <Info/>
                </div>
                <Link to='/settings' className='w-4.5 flex items-center hover:fill-(--iconstext-color-hover) cursor-pointer'> 
                    <Settings/>
                </Link>
            </div>

            <div className='flex ml-auto items-center gap-2 md:gap-6 pt-3'>
                
                <button 
                    className='w-6 h-auto flex items-center cursor-pointer hover:fill-(--iconstext-color-hover)' onClick={()=>{
                    alert("This is a functioning button");
                    }}
                    title='Notification'
                >
                    <Bell/>
                </button>
                <Link to='login' className='w-4.5 h-auto flex items-center hover:fill-(--iconstext-color-hover)'>
                    <Profile/>
                </Link>
            
            </div>

        </div>
    );
}

export default Header;