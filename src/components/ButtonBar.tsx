import React from "react";
import { Settings } from "../assets/Icons"; 
import {Quote, Clock, LetterA, Mountain} from "../assets/GameModeIcons"
import { useGameMode} from "../context/GameModeContext";
import type { GameMode } from "../context/GameModeContext";

type buttonItem = {
    id: GameMode;
    label: string;
    icon: React.ReactNode;
};

type buttonBarProps = {
    buttons: buttonItem[];
    selectedButton?:string;
    onButtonSelect: (id:GameMode) => void;
}

const buttons : buttonItem[] = [
    {id: 'time', label: "Time", icon:<Clock/>},
    {id: "word", label: "Word", icon:<LetterA/>},
    {id: "quote", label: "Quote", icon:<Quote/>},
    {id: "zen", label: "Zen", icon:<Mountain/>},
]; 

const CustomButtonBar: React.FC<buttonBarProps> = ({buttons, selectedButton, onButtonSelect}) =>{
    
    // const {gameMode, setGameMode} = useGameMode();

    return(
        <>
            {
                buttons.map((button)=>(
                    <button 
                    key={button.id}
                    onClick={() =>  
                        {
                            onButtonSelect(button.id);
                            localStorage.setItem('gameMode',JSON.stringify(button.id));
                        }}
                    className={`${selectedButton === button.id? 'text-(--selected-text-color) fill-(--selected-text-color)' : 'font-white fill-(--iconstext-color) hover:fill-(--iconstext-color-hover) hover:text-(--iconstext-color-hover)'} cursor-pointer `}
                    >
                        <div className=" gap-1  flex text-[0.8rem]">
                            <div className="w-3 flex items-center justify-center">
                                {button.icon}
                            </div>
                                {button.label} 
                        </div>
                        
                    </button>
                ))
            }
        </>    
    )
}

const ButtonBar = () => {

    // const [selectedButton, setSelectedButton] = useState<string | undefined>("word");
    const {gameMode, setGameMode} = useGameMode();
    return(
        <div>
        
            <div className="w-[60%] mx-auto my-4 flex items-center justify-center gap-3 md:hidden">
                <button className="font-medium fill-(--iconstext-color) cursor-pointer flex gap-2 items-center bg-(--tertiary-color) text-(--iconstext-color) hover:text-(--iconstext-color-hover) hover:fill-(--iconstext-color-hover) px-3 py-1 rounded-[6px]">
                    <div className="w-4 pt-[2px] ">
                        <Settings/>
                    </div>
                    <div className="text-[1rem] ">
                        Test Settings
                    </div>
                </button>
            </div>
        
            <div className="hidden w-fit mx-auto my-4 md:flex md:items-center md:justify-center gap-3 rounded-[6px] bg-(--tertiary-color) text-(--iconstext-color) px-3 py-1 text-[1rem]">
                <div className="flex items-center justify-center">
                    <span className="font-white fill-(--iconstext-color) hover:fill-(--iconstext-color-hover) hover:text-(--iconstext-color-hover) cursor-pointer">@punctuation &nbsp;</span>
                    <span className="font-white fill-(--iconstext-color) hover:fill-(--iconstext-color-hover) hover:text-(--iconstext-color-hover) cursor-pointer">#numbers</span>
                </div>
                <span>|</span>
                <div className="flex gap-5">
                    <CustomButtonBar
                        buttons={buttons}
                        selectedButton={gameMode}
                        onButtonSelect={setGameMode}
                    />
                </div> 
                
                <div className={`${gameMode==="word" ? 'visible' : 'hidden'}`}>
                    <span>|&nbsp; </span>
                    Word Options
                </div>
                <div className={`${gameMode==="time" ? 'visible' : 'hidden'}`}>
                    <span>|&nbsp; </span>
                    Time Options
                </div>
                

            </div>

        </div>
  )
}

export default ButtonBar;