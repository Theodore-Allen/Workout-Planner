'use client'
import Link from "next/link"
import { GoInfo } from "react-icons/go"
import { GoCheck } from "react-icons/go"
import { GoX } from "react-icons/go"

export default function ExerciseObj({ obj, deleteFunc, uncomplete = true }) {


    return <div className=" border-2  rounded-md px-2 py-1">
        <div>
            <h1 className="font-bold text-lg drop-shadow-md" >{obj.name} <Link href={`/info/${obj.name}`} ><GoInfo className="inline mt-[-1px] hover:" /> <p className="inline font-extralight text-sm">How To</p></Link></h1>
            <h3 className="text-sm font-light tracking-wide ">Tip: {obj.tip}</h3>
        </div>

        <div className="mt-7 flex items-center">
            <div className="flex-[10]">
                <h2>{obj.sets} Sets, {obj.reps} reps  <span className="bg-gradient-to-br from-green-500 to-green-600 py-1 px-2 rounded-sm ml-2 shadow-sm text-white drop-shadow-sm">{obj.recommendedWeight}</span></h2>
            </div>

            <div className="flex-[1] flex justify-end "> <button onClick={handleClick}>  {uncomplete ? <GoCheck className="inline bg-gray-100 border-2 border-gray-100  rounded-[50%] hover:brightness-50 " color="green" size={35} /> : <GoX className="inline bg-gray-100 border-2 border-gray-100  rounded-[50%] hover:brightness-50 " color="red" size={35} />} </button>
            </div>
        </div>

    </div>

    function handleClick() {
        deleteFunc(obj)
    }
}