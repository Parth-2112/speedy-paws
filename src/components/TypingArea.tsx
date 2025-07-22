// import { useGameMode } from "../context/GameModeContext";

const TypingArea = () => {
    
    // const {gameMode} = useGameMode();
    const words = "This is a sample text"; // This should be dynamic based on game mode or other logic

    return(

        <div className="flex-1 border-2 flex flex-col justify-center">
            
            <div className="timer text-(--secondary-color)">
                timer
            </div>
            <div 
                className="game border-2 border-amber-300 h-[105px] leading-[35px] w-full relative overflow-hidden " 
                tabIndex={0}
                >
                <div className="words text-(--iconstext-color)">
                    {words}     
                </div>

                <div className="focus-error absolute inset-0 flex items-center justify-center text-2xl text-(--iconstext-color-hover) border-2">
                    click here to start typing
                </div>
            
            </div>
        </div>
    );
} 

export default TypingArea