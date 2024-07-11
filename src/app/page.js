import Image from "next/image";
import routine from "./json/workoutData.json"
import Workouts from "./components/workouts";



export default function Home() {
  const todaysInfo =  routine.weeklyRoutine.find(e => e.day === day())
 
  

 console.log()
return (<>
    <h1 className="text-4xl font-bold">{todaysInfo.day} </h1>
    <div className="pl-1"> 

    <h1 className=" text-gray-500 tracking-wider">{fullDate()}</h1>
    <div className="mt-6" >
    <h1 className="font-semibold">Todays Focuse is {todaysInfo.focus.map(focus => <span key={1}> {focus}</span>)}.</h1>
    <Workouts _workoutsList={(todaysInfo.exercises[0] ? todaysInfo.exercises : todaysInfo.kneeMobilityExercises)} uncomplete= {true}/>
    </div>
    </div>
    

  </>
    
  );
}
function day()
{
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
 return weekday[d.getDay()];
}
function fullDate()
{
  const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);
return formattedDate
}