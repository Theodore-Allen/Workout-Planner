import routine from "@/app/json/workoutData.json"


export default function workoutPage({params})
{
    const name = params.workout.replace(/%20/g, ' ')

    const workouts = routine.weeklyRoutine.find(e => e.day === day())
    const exercise = workouts.exercises.filter(e => e.name === name)[0]
    
    return exercise ? <>
     <h1 className="text-4xl font-bold">{exercise.name} | {exercise.sets} Sets, {exercise.reps} Reps</h1>
        <div className="mt-5 mb-1- inline-block border-2 rounded-lg overflow-hidden" dangerouslySetInnerHTML={{__html: exercise.videoLink}}></div>
        
        <h3 className="text-sm font-light tracking-wide ">Tip: {exercise.tip}</h3>

        <span className="text-white inline-block bg-green-600 p-1 mt-5">Recommended Weight: {exercise.recommendedWeight? exercise.recommendedWeight: "UNKNOWN TRY UPDATING YOUR SETTINGS"}</span>
    </>:<h1>Sorry This Workout is not Valid</h1>
}
function day()
{
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
 return weekday[d.getDay()];
}