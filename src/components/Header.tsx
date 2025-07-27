// import paw from '/pawsvg.svg';
// import Dada from '/Dada.svg';
import { KeyboardSecondIcon, Profile, Bell, Crown, Info, Settings, PawIcon} from '../assets/HeaderIcons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NotificationModal from '../modal/NotificationModal';

const Header = () => {
    
    const [notificationModal, setNotificationModal] = useState(false);
    const toggleModal = () => {
        setNotificationModal(!notificationModal);
    }

    return(

        <div className="text-(--primary-text-color) bg-(--primary-bg-color) flex gap-2 items-center w-full px-2 fill-(--iconstext-color)">

            <Link to='/' className='w-10 pt-1 flex items-center fill-(--secondary-color) -ml-2' reloadDocument={true} title='Home'> 
                {/* <KeyboardIcon/> */}
                <PawIcon/>
            </Link>

            <div className='hidden md:block text-4xl text-(--iconstext-color-hover)'>
                speedypaws 
            </div>
             

            <div className="w-[50%] flex items-center gap-6 ml-6 pt-3">
                
                <Link to='/' className='w-5 flex items-center hover:fill-(--iconstext-color-hover) cursor-pointer' title='Home' reloadDocument={true}> 
                    <KeyboardSecondIcon/>
                </Link>
                <Link to='/leaderboard' className='w-5 flex items-center hover:fill-(--iconstext-color-hover) cursor-pointer' title='Leaderboard'> 
                    <Crown/>
                </Link>
                <Link to='/about' className='w-1.5 h-auto flex items-center hover:fill-(--iconstext-color-hover) cursor-pointer'> 
                    <Info/>
                </Link>
                <Link to='/settings' className='w-4.5 flex items-center hover:fill-(--iconstext-color-hover) cursor-pointer'> 
                    <Settings/>
                </Link>
            </div>

            <div className='flex ml-auto items-center gap-2 md:gap-6 pt-3'>
                
                <button 
                    className='w-6 h-auto flex items-center cursor-pointer hover:fill-(--iconstext-color-hover)' onClick={()=>toggleModal()}
                    title='Notification'
                >
                    <Bell/>
                </button>
                <Link to='login' className='w-4.5 h-auto flex items-center hover:fill-(--iconstext-color-hover)'>
                    <Profile/>
                </Link>
            
            </div>
            {
                notificationModal &&
                <div className="absolute inset-0 z-10">
                    <div 
                        className=' min-h-[100vh] min-w-[100vw] bg-black opacity-40'
                        onClick={()=>toggleModal()}
                    />
                    <NotificationModal/>
                </div>
            }
        </div>
    );
}

export default Header;