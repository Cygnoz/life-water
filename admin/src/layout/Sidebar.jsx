import dash from '../assets/images/dash.svg'
import order from '../assets/images/orders2.svg'
import staff from '../assets/images/staff.svg'
import customer from '../assets/images/customer.svg'
import sale from '../assets/images/sale.svg'
function Sidebar() {



  return (
    <>
    <div className="w-[76px] h-[1080px] pt-[86px] pb-[134px] bg-[#820000] flex-col justify-start items-center inline-flex">
    <div className="h-[860px] flex-col justify-center items-center gap-2 inline-flex">
        <div className="self-stretch h-[54px] flex-col justify-start items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 bg-[#530015] rounded-lg flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <img src={dash} alt="" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Dashboard</div>
        </div>
        <div className="h-[54px] flex-col justify-start items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 rounded-lg flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <img src={order} alt="" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Orders</div>
        </div>
        <div className="self-stretch h-[54px] flex-col justify-start items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <img src={staff} alt="" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Staff</div>
        </div>
        <div className="h-[54px] flex-col justify-start items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <img src={customer} alt="" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Customer</div>
        </div>
        <div className="h-[54px] flex-col justify-start items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <img src={sale} alt="" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Sales</div>
        </div>
        <div className="self-stretch h-[54px] flex-col justify-start items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Accountant</div>
        </div>
        <div className="self-stretch h-[54px] flex-col justify-center items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Supplier</div>
        </div>
        <div className="self-stretch h-[54px] flex-col justify-center items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Purchase</div>
        </div>
        <div className="self-stretch h-[54px] flex-col justify-center items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Expense</div>
        </div>
        <div className="self-stretch h-[54px] flex-col justify-start items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Teams</div>
        </div>
        <div className="self-stretch h-[54px] flex-col justify-start items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Contract</div>
        </div>
        <div className="self-stretch h-[54px] flex-col justify-start items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Payroll</div>
        </div>
        <div className="self-stretch h-[54px] flex-col justify-center items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Reports</div>
        </div>
        <div className="self-stretch h-[54px] flex-col justify-center items-center gap-1.5 flex">
            <div className="w-[42px] h-9 px-2.5 flex-col justify-center items-center gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold font-['Inter']">Service</div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default Sidebar