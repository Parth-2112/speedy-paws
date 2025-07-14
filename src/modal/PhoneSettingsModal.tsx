import { useGameMode } from "../context/GameModeContext"
import type { buttonItem } from "../components/ButtonBar";
import React from "react"

type modalProps = {
    buttons : buttonItem[];
}

const PhoneSettingsModal:React.FC<modalProps> = ({buttons}) => {
    
    const {gameMode, setGameMode} = useGameMode();

    return (
        <div className="flex flex-col gap-6"> 
            
            <div className="flex flex-col justify-center items-center">
                <div className="my-2 py-1 w-[80%] rounded-[6px] bg-(--tertiary-color) lowercase text-[1rem] tracking-widest text-center text-(--iconstext-color)">Punctions</div>
                <div className="my-2 py-1 w-[80%] rounded-[6px] bg-(--tertiary-color) lowercase text-[1rem] tracking-widest text-center text-(--iconstext-color)">Numbers</div>
            </div>

            <div className="flex flex-col items-center justify-center">
                {
                    buttons.map((button)=>{
                        return(
                            <button
                                onClick={()=>{
                                    setGameMode(button.id)
                                    localStorage.setItem('gameMode',JSON.stringify(button.id));
                                }}
                                className={`${button.id === gameMode ? 'text-(--selected-text-color) ' : 'text-(--iconstext-color) hover:fill-(--iconstext-color-hover) hover:text-(--iconstext-color-hover)'} my-2 py-1 w-[80%] rounded-[6px] bg-(--tertiary-color) lowercase text-[1rem] tracking-widest`}
                                key={button.id}
                            >
                            
                                {button.label} 
                            
                            </button>
                        )    
                    })
                }
            </div>

            <div className={`${gameMode==="word" ? 'visible' : 'hidden'} mx-auto my-2 py-1 w-[80%] rounded-[6px] bg-(--tertiary-color) lowercase text-[1rem] tracking-widest text-center text-(--iconstext-color)`}>
                Word 
            </div>

            <div className={`${gameMode==="time" ? 'visible' : 'hidden'} mx-auto my-2 py-1 w-[80%] rounded-[6px] bg-(--tertiary-color) lowercase text-[1rem] tracking-widest text-center text-(--iconstext-color)`}>
                Time 
            </div>
                    
        </div>
    )
}

export default PhoneSettingsModal;