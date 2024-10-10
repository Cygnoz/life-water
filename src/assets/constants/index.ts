
import dash from '../images/dash.svg'
import order from '../images/orders2.svg';
import staff from '../images/staff.svg'
import supply from '../images/supply.svg';
import customer from '../images/customer.svg';
import sale from '../images/sale.svg';
import purchase from '../images/purchase.svg';
import reports from '../images/reports.svg';
import accountant from '../images/sale.svg';
import vehicle from '../images/vehicle.svg';
import ride from '../images/ride.png'
import stock from '../images/stock.png'




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
        headName: "Orders",
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
    nav: "Vehicle",
    icon:vehicle,
    route: "/vehicle",
    subhead: [
      
      {
        headName: "Vehicle",
        subRoute: "/vehicle",
      },
      
    ],
  }, 

 
  {
    nav: "Stock",
    icon:stock,
    route: "/stock",
    subhead: [
      
      {
        headName: "Stock",
        subRoute: "/stock",
      },
      
    ],
  },  {
    nav: "Ride",
    icon:ride,
    route: "/ride",
    subhead: [
      
      {
        headName: "Ride",
        subRoute: "/ride",
      },
      
    ],
  },
  {
    nav: "Customer",
    icon:customer,
    route: "/customer",
    subhead: [
      {
        headName: "Customer",
        subRoute: "/customer"
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
    nav: "Accountant",
    icon:accountant,
    route: "/",
    subhead: [
      { headName: "Dashbord", subRoute: "/" },
      { headName: "Expense", subRoute: "/expense/home" },
    ],
  },
  {
    nav: "Reports",
    icon:reports,
    route: "/reports",
  },

 
];
 
export default navlist;