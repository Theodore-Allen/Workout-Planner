'use client'
import Link from "next/link"
import { GoInfo } from "react-icons/go"
import { GoCheck } from "react-icons/go"
import { GoX } from "react-icons/go"

export default function ExerciseObj({obj, key, deleteFunc, uncomplete = true})
{

   
    return <div className="border-2 rounded-md px-2 py-1">
        <div>
        <h1 className="font-bold text-lg">{obj.name} <Link href={`/info/${obj.name}`} ><GoInfo className="inline mt-[-1px] hover:"/> <p className="inline font-extralight text-sm">How To</p></Link></h1>
        <h3 className="text-sm font-light tracking-wide ">Tip: {obj.tip}</h3>
        </div>
        <div className="mt-7 flex items-center"> 
            <div className="flex-[1] ">
            <h2>{obj.sets} Sets, {obj.reps} reps</h2>
            </div>
           <div  className="flex-[1] flex justify-end "> <button onClick={handleClick}>  {uncomplete? <GoCheck className="inline bg-gray-100 border-2 border-gray-100  rounded-[50%] hover:brightness-50 " color="green" size={35}/>:<GoX className="inline bg-gray-100 border-2 border-gray-100  rounded-[50%] hover:brightness-50 " color="red" size={35}/> } </button></div>
        </div>
       
    </div>

    function handleClick()
    {
        deleteFunc(obj)
    }
}