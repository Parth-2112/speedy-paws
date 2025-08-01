import { useGameMode } from "../context/GameModeContext";
import { useEffect, useState } from "react";


const TypingArea = () => {

    const {gameMode} = useGameMode();
    const [words, setWords] = useState("This is a sample text and is being used for text etc and this is it in the best way possible be willing to be done in this way");
    // const [gameTimer, setTimer] = useState(30 * 1000); // 30 seconds in milliseconds
    // window.timer = null;

    const addClass = (element: HTMLElement, className: string) => {
        element.classList.add(className);    
    }

    const removeClass = (element: HTMLElement, className: string) => {
        element.classList.remove(className);   
    }

    const randomWord = (newWords : string[]) =>{
        const randomIndex = Math.ceil(Math.random() * newWords.length - 1);
        return newWords[randomIndex];
    }

    const formatWord = (word: string) => {
        return(
            `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`
        );
    }

    const newGame = ()=>{
        const newWords = words.split(" ");
        const wordElement = document.getElementById("words");
        if(wordElement) {
            wordElement.innerHTML = '';
        }

        for(let i=0; i<200; i++) {
            if(wordElement){
                wordElement.innerHTML +=formatWord(randomWord(newWords));
            }
        }

        const firstWord = document.querySelector(".word");
        const firstLetter = document.querySelector(".letter");

        if(firstWord){
            addClass(firstWord as HTMLElement, "current");
        }
        if(firstLetter){
            addClass(firstLetter as HTMLElement, "current");
        }
    }

    useEffect(() => {

        const gameElement = document.getElementById("game");
        if (!gameElement) return;

        newGame(); // Call the function to generate new words
        
        
        const currLetterForCursor = document.querySelector(".letter.current") as HTMLElement;
        if(currLetterForCursor) {
            const curr = document.getElementById("cursor");
            if(curr){
                curr.style.top = currLetterForCursor.offsetTop + "px";
                curr.style.left = currLetterForCursor.offsetLeft + "px";
            }
        }        

        const handleKeyUp = (e: KeyboardEvent) => {
            
            const typedKey = e.key;
            const currentWord = document.querySelector(".word.current") as HTMLElement;
            const currentLetter = document.querySelector(".letter.current") as HTMLElement;
            const expectedKey = currentLetter?.innerHTML;
            const isLetter = typedKey.length === 1 && typedKey !== ' ';
            const isSpace = typedKey === ' ';
            const isBackspace = typedKey === 'Backspace';
            const isFirstLetter = currentLetter === currentWord?.firstChild;

            if (isLetter) {
                if (currentLetter) {

                    if (expectedKey === typedKey) {
                        addClass(currentLetter, "correct");
                        removeClass(currentLetter, "incorrect");
                    } else {
                        addClass(currentLetter, "incorrect");
                        removeClass(currentLetter, "correct");
                    }

                    removeClass(currentLetter, "current");
                    if (currentLetter.nextSibling) {
                        addClass(currentLetter.nextSibling as HTMLElement, "current");
                    }
                } else {
                    const incorrectLetter = document.createElement("span");
                    incorrectLetter.innerHTML = typedKey;
                    incorrectLetter.className = "letter incorrect extra-letter";
                    currentWord.appendChild(incorrectLetter);
                }
            }

            if (isSpace) {
                if (expectedKey !== ' ') {
                    
                    if (currentWord) {
                        const incorrectLetters = [...currentWord.querySelectorAll(".letter:not(.correct)")];
                        incorrectLetters.forEach((letter) => {
                            addClass(letter as HTMLElement, "incorrect");
                            removeClass(letter as HTMLElement, "current");
                        });
                    }

                    removeClass(currentWord, "current");
                    if (currentWord.nextSibling) {
                        addClass(currentWord.nextSibling as HTMLElement, "current");
                    }

                    const nextLetter = document.querySelector(".word.current .letter");
                    if (nextLetter) {
                        addClass(nextLetter as HTMLElement, "current");
                    }
                }
            }
            
            if(isBackspace) {
                if( currentWord === document.getElementById("words")?.firstChild 
                    && isFirstLetter 
                    && currentLetter 
                    && !currentLetter.classList.contains("correct") 
                    && !currentLetter.classList.contains("incorrect")
                ) {}
                else if(currentLetter && isFirstLetter){
                    // make previous word current and the last letter of that word current
                    removeClass(currentWord, "current");
                    removeClass(currentLetter, "current");

                    const previousWord = currentWord.previousSibling as HTMLElement | null;
                    if(previousWord) {
                        addClass(previousWord, "current");
                        addClass(previousWord.lastChild as HTMLElement, "current");
                        const prev = previousWord.lastChild as HTMLElement;
                        if(prev?.classList.contains("extra-letter")){
                            previousWord.lastChild?.remove();
                        }
                        else{
                            removeClass(previousWord.lastChild as HTMLElement, "incorrect");
                            removeClass(previousWord.lastChild as HTMLElement, "correct");
                        }
                    }    
                }
                else if(currentLetter && !isFirstLetter) {
                    //move back one letter and invalidate the current letter 
                    removeClass(currentLetter, "current");
                    const previousLetter = currentLetter.previousSibling as HTMLElement | null;
                    if(currentLetter.classList.contains("extra-letter")){
                        addClass(previousLetter as HTMLElement, "current");
                        currentLetter.remove();
                    }
                    if(previousLetter) {
                        addClass(previousLetter, "current");
                        removeClass(previousLetter, "incorrect");
                        removeClass(previousLetter, "correct");
                    }
                }
                else if(currentLetter === null) {
                    if(currentWord){
                        const prev = currentWord.lastChild as HTMLElement | null;
                        if(prev?.classList.contains("extra-letter")){
                            prev.remove();
                        }
                        else{
                            addClass(currentWord.lastChild as HTMLElement, "current");
                            removeClass(currentWord.lastChild as HTMLElement, "incorrect");
                            removeClass(currentWord.lastChild as HTMLElement, "correct");
                        }
                    }
                }
            }
            
            
            // Moving the lines 
    
            const nextWord = document.querySelector(".word.current") as HTMLElement | null;
            const gameBox = document.getElementById("game");
            const wordsContainer = document.getElementById("words");

            if (gameBox && nextWord && wordsContainer) {
                const gameBoxTop = gameBox.getBoundingClientRect().top;
                const wordTop = nextWord.getBoundingClientRect().top;
                
                if (wordTop - gameBoxTop >= 70) { // If word is below visible area (tweak 70px as needed)
                    const currentMarginTop = parseInt(getComputedStyle(wordsContainer).marginTop || "0");
                    wordsContainer.style.marginTop = (currentMarginTop - 35) + "px"; // scroll up one line height (35px)
                }
            }


            // For moving the cursor
            const nextLetter = document.querySelector(".letter.current") as HTMLElement | null;
            const cursor = document.getElementById("cursor");
            const wordsMarginTop = parseInt(getComputedStyle(wordsContainer!).marginTop || "0");

            if (cursor && nextWord) {
                if (nextLetter) {
                    cursor.style.top = (nextLetter.offsetTop + wordsMarginTop) + "px";
                    cursor.style.left = nextLetter.offsetLeft + "px";
                } else {
                    const letters = nextWord.querySelectorAll(".letter");
                    const lastLetter = letters[letters.length - 1] as HTMLElement;

                    if (lastLetter) {
                        cursor.style.top = (lastLetter.offsetTop + wordsMarginTop) + "px";
                        cursor.style.left = (lastLetter.offsetLeft + lastLetter.offsetWidth) + "px";
                    }
                }
            }

        };

        gameElement.addEventListener('keyup', handleKeyUp);

        return () => {
            gameElement.removeEventListener('keyup', handleKeyUp); // 🧼 Clean up
        };
        
    }, [gameMode]);



    return(

        <div className="flex-1 flex flex-col justify-center">
            
            <div className="timer text-(--secondary-color) ml-1 ">
                0
            </div>
            <div 
                className="game outline-none h-[105px] leading-[35px] w-full relative overflow-hidden m-0 p-0 " 
                tabIndex={0}
                id="game"
            >
                
                <div 
                    className="words text-[20px] m-0 p-0" 
                    id="words"
                />
                <div
                    className="w-[2px] h-[1.6rem] bg-(--secondary-color) absolute inset-0 m-0 p-0"
                    id="cursor"
                />
                
                <div className="focus-error absolute inset-0 flex items-center justify-center text-2xl text-(--iconstext-color-hover)">
                    click here to start typing
                </div>
            
            </div>
        </div>
    );
} 

export default TypingArea