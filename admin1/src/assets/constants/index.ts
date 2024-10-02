
import dash from '../images/dash.svg'
import order from '../images/orders2.svg';
import staff from '../images/staff.svg'
import supply from '../images/supply.svg';
import customer from '../images/customer.svg';
import sale from '../images/sale.svg';
import expense from '../images/expense.svg';
import payroll from '../images/payroll.svg';
import purchase from '../images/purchase.svg';
import service1 from '../images/service1.svg';
import reports from '../images/reports.svg';
import contract from '../images/contract.svg';
import accountant from '../images/sale.svg';





const navlist = [
  {
    nav: "Dashboard",
    icon:dash,
    route: "/dashboard",
  },
  {
    nav: "Orders",
    icon:order,
    route: "/orders",
   
    subhead: [
      {
        headName: "",
        subRoute: "/",
      },
     
    ],
  },
  {
    nav: "Staff",
    icon:staff,
    route: "/staff",
    subhead: [
      {
        headName: "Dashboard",
        subRoute: "/customer",
      },
     
    ],
  },
  {
    nav: "Route",
    icon:supply,
    route: "/route/createroute",
    subhead: [
      // {
      //   subhead: "Route",
      //   subRoute: "/staff",
      // },
      {
        headName: "Main Route",
        subRoute: "/route/createroute",
      },
      {
        headName: "Active Route",
        subRoute: "/route/activeroute",
      },
      {
        headName: "Sub Route",
        subRoute: "/route/subroute",
      },
     
    ],
  },
  {
    nav: "Customer",
    icon:customer,
    route: "/",
    subhead: [
      {
        headName: "Dashboard",
        subRoute: "accountant",
      },
      
    ],
  },
  {
    nav: "Sales",
    icon:sale,
    route: "/",
    subhead: [
      {
        headName: "Dashboard",
        subRoute: "/supplier",
      },
      {
        headName: "Supplier",
        subRoute: "/supplier/home",
      },
    ],
  },
  {
    nav: "Accountant",
    icon:accountant,
    route: "/",
    subhead: [
      { headName: "Dashbord", subRoute: "/" },
      { headName: "Expense", subRoute: "/expense/home" },
    ],
  },
  {
    nav: "Purchase",
    icon:purchase,
    route: "/",
    subhead: [
      {
        headName: "Dashboard",
        subRoute: "/",
      },
   
    ],
  },
  {
    nav: "Expense",
    icon:expense,
    route: "/",
    subhead: [
      {
        headName: "Dashboard",
        subRoute: "/purchase",
      },
    
    ],
  },
  {
    nav: "Teams",
    icon:staff,
    route: "/teams",
  },
  {
    nav: "Contract",
    icon:contract,
    route: "/contract",
  },
  {
    nav: "Payroll",
    icon:payroll,
    route: "/payroll",
  },
  {
    nav: "Reports",
    icon:reports,
    route: "/reports",
  },
  {
    nav: "Service",
    icon:service1,
    route: "/service",
  },
];
 
export default navlist;