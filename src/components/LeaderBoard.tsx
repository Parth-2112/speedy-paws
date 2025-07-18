

const LeaderBoard = () => {
  return(
    <div className="bg-(--primary-bg-color) h-full w-full flex flex-col "> 
      <h1 className="text-4xl tracking-wider text-(--iconstext-color-hover)">All-Time English Leaderboards </h1>  
      <div className="grid grid-cols-2 mt-10 gap-6">
        
        <div className="flex col-span-1">
          <h1 className="text-(--secondary-color) text-3xl tracking-wider">Time 15</h1>

        </div>
        
        <div className="flex col-span-1">
          <h1 className="text-(--secondary-color) text-3xl tracking-wider">Time 60</h1>
        </div> 
      
      </div>
    </div>
)
}

export default LeaderBoard