import Image from "next/image";
import routine from "@/app/json/workoutData.json"
import Workouts from "@/app/components/workouts"



export default function Home() {


  const todaysInfo =  routine.weeklyRoutine.find(e => e.day === day())
  const inspirationalQuotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "The harder the struggle, the more glorious the triumph. – Swami Sivananda",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Our greatest glory is not in never falling, but in rising every time we fall. – Confucius",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt"
  ];
  
  

 
return (<>
    <h1 className="text-4xl font-bold leading-9 mb-5 ">💪💪Congrates these are you completed Workouts💪💪 </h1>
    <div className="pl-1"> 

    <h1 className=" text-gray-500 tracking-wider">{fullDate()}</h1>
    <div className="mt-6" >
    <h1 className="font-semibold">{getRandomQuote(inspirationalQuotes)}</h1>
    <Workouts _workoutsList={(todaysInfo.exercises[0] ? todaysInfo.exercises : todaysInfo.kneeMobilityExercises)} uncomplete= {false}/>
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
function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }