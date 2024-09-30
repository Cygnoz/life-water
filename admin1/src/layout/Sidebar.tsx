import React from 'react';
import dash from '../assets/images/dash.svg';
import order from '../assets/images/orders2.svg';
import staff from '../assets/images/staff.svg';
import customer from '../assets/images/customer.svg';
import sale from '../assets/images/sale.svg';
import expense from '../assets/images/expense.svg';
import payroll from '../assets/images/payroll.svg';
import purchase from '../assets/images/purchase.svg';
import service1 from '../assets/images/service1.svg';
import reports from '../assets/images/reports.svg';
import supply from '../assets/images/supply.svg';
import contract from '../assets/images/contract.svg';
import accountant from '../assets/images/sale.svg';

interface SidebarItem {
  src: string;
  label: string;
}

const Sidebar: React.FC = () => {
  const sidebarItems: SidebarItem[] = [
    { src: dash, label: 'Dashboard' },
    { src: order, label: 'Orders' },
    { src: staff, label: 'Staff' },
    { src: customer, label: 'Customer' },
    { src: sale, label: 'Sales' },
    { src: accountant, label: 'Accountant' },
    { src: supply, label: 'Supplier' },
    { src: purchase, label: 'Purchase' },
    { src: expense, label: 'Expense' },
    { src: staff, label: 'Teams' },
    { src: contract, label: 'Contract' },
    { src: payroll, label: 'Payroll' },
    { src: reports, label: 'Reports' },
    { src: service1, label: 'Service' }
  ];

  return (
    <div className="w-[76px] h-[1080px] pt-[50px] pb-[134px] bg-[#820000] flex-col justify-start items-center inline-flex">
      <div className="h-[860px] flex-col justify-center items-center gap-2 inline-flex">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="self-stretch h-[54px] flex-col justify-start items-center gap-1.5 flex hover:bg-[#530015] rounded-lg p-2 cursor-pointer transition-all duration-200 ease-in-out"
          >
            <div className="w-[42px] h-9 px-2.5 rounded-lg flex-col justify-center items-center gap-2 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <img src={item.src} alt={item.label} />
              </div>
            </div>
            <div className="self-stretch text-center text-[#f7e7ce] text-[10px] font-semibold">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
