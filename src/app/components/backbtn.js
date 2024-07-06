'use client'
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";

export default function BackBtn()
{
    const router = useRouter()

    return <GoArrowLeft className="inline p-1 bg-gray-100  border-2 border-gray-100  rounded-[50%] hover:brightness-50 " size={50} onClick={() => {router.back()}}/>
}