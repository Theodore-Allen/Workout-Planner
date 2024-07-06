import Image from "next/image";
import routine from "./json/workoutData.json"
import ExerciseObj from "./components/exerciseObj";


export default function Home() {
 const workouts = routine.weeklyRoutine.find(e => e.day === day())

 console.log()
return (<>
    <h1 className="text-4xl font-bold">{workouts.day}</h1>
    <div className="pl-1"> 

    <h1 className=" text-gray-500 tracking-wider">{fullDate()}</h1>
    <div className="mt-6" >
    <h1 className="font-semibold">Todays Focuse is {workouts.focus.map(focus => <span key={1}> {focus}</span>)}.</h1>
      <div className="mt-5 flex gap-3 flex-col pb-7">
          {workouts.exercises.map( (e, i) =><ExerciseObj key={i} obj={e}/> )}
      </div>
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