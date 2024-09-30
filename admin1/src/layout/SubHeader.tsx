 <div className="w-[1299px] h-[76px] px-8 py-[18px] bg-[#e3e6d5] rounded-[40px] justify-start items-center gap-4 inline-flex">
   
</div> 
import React from 'react'

const SubHeader:React.FC = () => {
  return (
   <>
    <div className="w-[1299px] h-[76px] px-8 py-[18px] bg-[#e3e6d5] rounded-[40px] justify-start items-center gap-4 inline-flex">
   
  
    <div className="px-3 py-1 bg-white rounded-[30px] justify-start items-center gap-0.5 flex">
        <div className="h-8 px-0.5 rounded-[56px] flex-col justify-center items-start gap-2 inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-5 h-5 relative" />
            </div>
        </div>
    </div>
    <div className="grow shrink basis-0 h-[35px] justify-start items-center gap-3.5 flex">
        <div className="px-4 py-2 rounded-[30px] justify-center items-center gap-2.5 flex">
            <div className="text-[#585953] text-base font-bold font-['Inter']">Dashboard</div>
        </div>
        <div className="px-4 py-2 bg-[#fcffed] rounded-[30px] justify-center items-center gap-2.5 flex">
            <div className="text-[#585953] text-base font-semibold font-['Inter']">Order</div>
        </div>
    </div>
    <div className="h-[38px] justify-end items-center gap-1 flex">
        <div className="p-2 bg-white rounded-[40px] justify-start items-center gap-2.5 flex">
            <div className="w-[22px] h-[22px] relative" />
        </div>
    </div>
    </div> 
   </>
  )
}

export default SubHeader
