import InfoChart from "./InfoChart";
import { SiDiscord } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const About = () => {
  
  return (
    <div className="w-full h-full flex flex-col items-center text-(--iconstext-color) bg-(--primary-bg-color) mt-5">
      
      <div className="text-center tracking-widest font-medium">
        Craeted with love by Parth <br/> With inspo from miguelrp99 EasyType and Original MonkeyType.<br/>Launched on 20th July 2025.
      </div>    

      <div className="flex flex-col w-full md:flex-row md:justify-evenly items-center gap-4 p-4 mt-6">
        <div className="flex flex-col items-center">
          <span>total tests started</span>
          <p className="font-medium text-5xl tracking-wider text-(--iconstext-color-hover)">1.32</p>
          <p className="font-medium text-3xl tracking-wider text-(--iconstext-color-hover)">billion</p>
        </div>
        <div className="flex flex-col items-center">
          <span>total typing time</span>
          <p className="font-medium text-5xl tracking-wider text-(--iconstext-color-hover)">1000</p>
          <p className="font-medium text-3xl tracking-wider text-(--iconstext-color-hover)">years</p>
        </div>
        <div className="flex flex-col items-center">
          <span>total tests completed</span>
          <p className="font-medium text-5xl tracking-wider text-(--iconstext-color-hover)">440</p>
          <p className="font-medium text-3xl tracking-wider text-(--iconstext-color-hover)">million</p>
        </div>

      </div>

      <div className="w-full h-[150px] md:h-[200px] mt-6 mx-5 md:px-10">
        <InfoChart /> 
        <p className="text-end -mt-2">distribution of time 60 leaderboard results (wpm)</p>
      </div>
    
      <div className="w-full mt-10">
        <p className="text-4xl mb-3 text-(--iconstext-color)">about</p>
        <p className="text-l text-(--iconstext-color-hover)">Easytype is a minimalistic and customizable typing test. It features many test modes, an account system to save your typing speed history, and user-configurable features such as themes, sounds, a smooth caret, and more. Monkeytype attempts to emulate the experience of natural keyboard typing during a typing test, by unobtrusively presenting the text prompts and displaying typed characters in-place, providing straightforward, real-time feedback on typos, speed, and accuracy. Test yourself in various modes, track your progress and improve your speed.<br/><br/>
        Test yourself in various modes, track your progress and improve your speed.</p>
      </div>

      <div className="w-full mt-10">
        <p className="text-4xl mb-3 text-(--iconstext-color)">support</p>
        <p className="text-l text-(--iconstext-color-hover)">Thanks to @miguelrp99, This project wouldn't be possible without your codeBase.</p>

        <div className="w-full flex flex-col md:flex-row md:justify-between mt-10 items-center gap-3">
          
          <div className="w-[200px] bg-(--tertiary-color) flex flex-row gap-2 justify-center items-center py-7 rounded-xl text-(--iconstext-color-hover) text-3xl px-5 cursor-pointer hover:bg-(--iconstext-color-hover) hover:text-(--tertiary-color)"> <IoIosMail className="text-4xl"/>Mail </div>
          
          <div className="w-[200px] bg-(--tertiary-color) flex flex-row gap-2 justify-center items-center py-7 rounded-xl text-(--iconstext-color-hover) text-3xl px-5 cursor-pointer hover:bg-(--iconstext-color-hover) hover:text-(--tertiary-color)"><FaXTwitter/>Twitter </div>
          
          <a 
            rel="noopener noreferrer" 
            href="https://github.com/Parth-2112/speedy-paws" 
            target="_blank" 
            className="w-[200px] bg-(--tertiary-color) flex flex-row gap-2 justify-center items-center py-7 rounded-xl text-(--iconstext-color-hover) text-3xl px-5 cursor-pointer hover:bg-(--iconstext-color-hover) hover:text-(--tertiary-color)"> 
              <AiFillGithub/>Github
          </a>
          
          <div className="w-[200px] bg-(--tertiary-color) flex flex-row gap-2 justify-center items-center py-7 rounded-xl text-(--iconstext-color-hover) text-3xl px-5 cursor-pointer hover:bg-(--iconstext-color-hover) hover:text-(--tertiary-color)"><SiDiscord/>Discord</div>
        </div>
      </div>
    </div>
  );
}

export default About