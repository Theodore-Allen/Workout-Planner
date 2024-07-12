import Link from "next/link";

import { GoHomeFill } from "react-icons/go";
import { GoGear } from "react-icons/go";
import { GoCheck } from "react-icons/go";
import Backbtn from "./backbtn";



export default function Menu() {
    return <>
        <div className="p-1 overflow-hidden z-30 bg-white"> 
            <div className="flex border-r-2 h-[99vh] flex-col p-2 w-[63px] overflow-hidden " >
                <div className="flex flex-col gap-2 flex-[1]">
                <Btn Icon={GoHomeFill} page='/' />
                <Btn Icon={GoCheck} page ='/completed'/>
                <Backbtn/>
                </div>
                
                <div className="flex justify-end gap-2 flex-col flex-[1]">
                    
                    <Btn Icon={GoGear} className='self-end' page='/settings' />
                    <Btn Icon={GoGear} className='self-end' page='/settings' />
                    <Btn Icon={GoGear} className='self-end' page='/settings' />
                </div>

            </div>
        </div>


    </>
}

function Btn({ Icon, page, className }) {
    return <>
        <Link href={page} className={className}><Icon className="inline p-1 bg-gray-100 border-2 border-gray-100 rounded-[50%] hover:brightness-50 " size={50} /></Link>

    </>
}

