import { Outlet, createBrowserRouter } from "react-router-dom";
import DhashRoute from "./pages/Dashboard/DhashROute";
import Reports from "./pages/Dashboard/Reports";
import Notfound from "./pages/Dashboard/Notfound";
import ALLEmployee from "./pages/Dashboard/allEmployess";
import AddEmployee from "./pages/Dashboard/add/AddEmploye";
import IncomePage from "./pages/Dashboard/Dakhli";
import ReceiptComponent from "./pages/Dashboard/Cashuur";
import AddReceiptPage from "./pages/Dashboard/AddReceiptPage";
import DistrictsPage from "./pages/Dashboard/Degmooyin";
import LoginScreen from "./pages/LoginScreen";

function Route() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Route;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        index: true,
        element: <LoginScreen />,
      },

      // {
      //   path:'*',
      //   element:<Notfound/>
      // }
    ],
  },
  {
    path: "Dashboard",
    element: <DhashRoute />,
    children: [
      {
        index: true,
        element: <Reports />,
      },
      {
        path: "Home",
        element: <Reports />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
      {
        path: "Shaqaale",
        element: <ALLEmployee />,
      },
      {
        path: "Dagmooyin",
        element: <DistrictsPage />,
      },
      {
        path: "Dakhli",
        element: <IncomePage />,
      },
      {
        path: "Cashuur",
        element: <ReceiptComponent />,
      },
      {
        path: "Cashuur/add",
        element: <AddReceiptPage />,
      },
      {
        path: "Reports",
        element: <Reports />,
      },
      {
        path: "Shaqaale/Create",
        element: <AddEmployee />,
      },
      //   {
      //     path:"User/Update/:user_id",
      //     element:<UpdateUser/>
      //   },
      //   {
      //     path:"Vendor/CreateVendor",
      //     element:<SheetCreateV/>
      //   },
      //   {
      //     path:"Products",
      //     element:<Products/>
      //   },
      //   {
      //     path:"Products/Expenses",
      //     element:<AllExpenses/>
      //   },
      //   {
      //     path:"Expenses",
      //     element:<AllExpenses/>
      //   },
      //   {
      //     path:"Expenses/Create",
      //     element:<CreateExpenses/>
      //   },
      //   {
      //     path:"Products/Expenses/Create",
      //     element:<CreateExpenses/>
      //   },
      //   {
      //     path:"Products/Expenses/Update/:expense_id",
      //     element:<UpdateExpenses/>
      //   },
      //   {
      //     path:"Products/Create",
      //     element:<ProductCreate/>
      //   },
      //   {
      //     path:"Purchases",
      //     element:<CreatePurchase/>
      //   },
      //   {
      //     path:"Purchases/Update/:purchase_id",
      //     element:<UpdatePurchase/>
      //   },
      //   {
      //     path:"Purchases/All",
      //     element:<AllPurchases/>
      //   },
      //   {
      //     path:"Purchases/All/Alert",
      //     element:<AllPurchasesAlert/>
      //   },
      //   {
      //     path:"Sales/Update/:sale_id",
      //     element:<UpdateSale/>
      //   },
      //   {
      //     path:"Sales",
      //     element:<SAlesCreate/>
      //   },
      //   {
      //     path:"Sales/Lists",
      //     element:<SaleDTa/>
      //   },
      //   {
      //     path:"Sales/Lists/Sales",
      //     element:<SAlesCreate/>
      //   },
      //   {
      //     path:"Sales/CreateCustomer",
      //     element:<CreateCustomer/>
      //   },
      //   {
      //     path:"Payables",
      //     element:<Payables/>
      //   },
      //   {
      //     path:"Payables/payment/:purchase_id",
      //     element:<Payment/>
      //   },
      //   {
      //     path:"TopSales",
      //     element:<TopSale/>
      //   },
      //   {
      //     path:"Reports",
      //     element:<Reports/>
      //   },
      //   {
      //     path:"Reports/SaleReport",
      //     element:<SaleReports/>
      //   },
      //   {
      //     path:"Home/SaleReport",
      //     element:<SaleReports/>
      //   },
      //   {
      //     path:"Reports/ExpensesReport",
      //     element:<ExpensesReport/>
      //   },
      //   {
      //     path:"Home/ExpensesReport",
      //     element:<ExpensesReport/>
      //   },
      //   {
      //     path:"Reports/PurchasesReport",
      //     element:<PurchaseReport/>
      //   },
      //   {
      //     path:"Home/PurchasesReport",
      //     element:<PurchaseReport/>
      //   },
      //   {
      //     path:"Reports/Income",
      //     element:<ProfitOr/>
      //   },
      //   {
      //     path:"Home/Income",
      //     element:<ProfitOr/>
      //   },
      //   {
      //     path:"Receipt",
      //     element:<Recipt/>
      //   },
      //   {
      //     path:"SaleReceipt",
      //     element:<SaleRecipt/>
      //   },
      //   {
      //     path:"Vendor/Update/:vendor_id",
      //     element:<UpdateVendors/>
      //   },
      //   {
      //     path:"Products/Update/:product_id",
      //     element:<ProductUpdate/>
      //   },
      //   {
      //     path:"Receiveable",
      //     element:<RecieveAble/>
      //   },
      //   {
      //     path:"Receiveable/RecieveAblepayment/:sale_id",
      //     element:<ReceivePayment/>
      //   },
      //   {
      //     path:"Employees",
      //     element:<AllEmoloye/>
      //   },
      //   {
      //     path:"Employees/New",
      //     element:<CreateEmployees/>
      //   },
      //   {
      //     path:"Employees/update/:employee_id",
      //     element:<UpdateEmployee/>
      //   },
      //   {
      //     path:"Employees/salaries",
      //     element:<Allsalary/>
      //   },
      //   {
      //     path:"Employees/salaries/newSalry",
      //     element:<CreateSalary/>
      //   },
      //   {
      //     path:"Employees/salaries/update/:employee_id",
      //     element:<UpdateSalary/>
      //   }
      //   ,{
      //     path:"invoices",
      //     element:<InvoiceP/>
      //   },
      //   {
      //    path:"invoices/:id",
      //    element:<InvoicePage/>
      //   }
    ],
  },
]);
