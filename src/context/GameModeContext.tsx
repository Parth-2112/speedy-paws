import React, { createContext, useContext, useState } from 'react';

export type GameMode = "time" | "word" | "quote" | "zen";

type GameModeContextType = {
    gameMode : GameMode;
    setGameMode : (mode : GameMode) => void;
}

const GameModeContext = createContext<GameModeContextType | undefined> (undefined);

export const GameModeProvider : React.FC<{children : React.ReactNode}> = ({children}) => {

    const [gameMode, setGameMode] = useState<GameMode>(()=>{
        const saved = localStorage.getItem('gameMode');
        return saved? JSON.parse(saved) : 'word';
    });

    return(
        <GameModeContext.Provider value={{gameMode, setGameMode}}>
            {children}
        </GameModeContext.Provider>
    );
};

export const useGameMode = () => {
    const context = useContext(GameModeContext);
    if(context === undefined){
        throw new Error("The GameModeContext must be used withing a context procvider");
    }
    return context;
};