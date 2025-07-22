import ButtonBar from "./ButtonBar";
import TypingArea from "./TypingArea";

const Home = () => {

  return(
    
    <div className="bg-(--primary-bg-color) flex flex-col">

      <ButtonBar/>
      <TypingArea/>

    </div>
  );
}

export default Home;