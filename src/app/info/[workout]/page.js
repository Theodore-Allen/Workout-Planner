import routine from "../../json/workoutData.json"


export default function workoutPage({params})
{
  
    const name = params.workout.replace(/%20/g, ' ')

    const workouts = routine.weeklyRoutine.find(e => e.day === day())
    
  
    const exercise = (workouts.exercises[0] ? workouts.exercises:workouts.kneeMobilityExercises).find(e => e.name === name)
    
    return exercise ? <>
    <div>

      
    </div>
     <h1 className="text-xl font-bold lg:text-2xl lg:font-bold leading-loose ">{exercise.name} | {exercise.sets} Sets, {exercise.reps} Reps <span className="  bg-gradient-to-br from-green-500 to-green-600 py-1 px-2 rounded-sm md:ml-2 shadow-sm text-white drop-shadow-sm">{exercise.recommendedWeight}</span></h1>
        <div className=" mb-1 inline-block border-2 rounded-lg overflow-hidden scale-[0.68] md:scale-100 md:ml-0 md:mt-5 ml-[-90px] mt-[-30px] w-[55s0px]" dangerouslySetInnerHTML={{__html: exercise.videoLink}}></div>
        
        <h3 className="text-sm font-light tracking-wide w-[] md:mt-0 mt-[-35px]">Tip: {exercise.tip}</h3>

        
    </>:<h1>Sorry This Workout is not Valid</h1>
}
function day()
{
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
 return weekday[d.getDay()];
}