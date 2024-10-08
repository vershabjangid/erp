import "../css/index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login pages/Login";
import { Employee_login } from "../pages/Login pages/Employee_login";
import { Add_employee } from "../pages/add pages/Add_employee";
import { View_Employees } from "../pages/view pages/View_Employees";
import { Add_customer } from "../pages/add pages/Add_customer";
import { View_Customer } from "../pages/view pages/View_Customer";
import { Add_Product } from "../pages/add pages/Add_Product";
import { View_Project } from "../pages/view pages/View_Project";
import { Add_task } from "../pages/add pages/Add_task";
import { View_task } from "../pages/view pages/View_task";
import { Login_supervisor } from "../pages/Login pages/Login_supervisor";
import { Register } from "../pages/Login pages/Register";
import { Page404 } from "../pages/Page404";
import { Gstr } from "../pages/Gstr/Gstr";
import { Add_Gstr_3b } from "../pages/Gstr/add gstr/Add_Gstr_3b";
import { View_Gstr_3b } from "../pages/Gstr/view gstr/View_Gstr_3b";
import { Add_Gstr_1 } from "../pages/Gstr/add gstr/Add_Gstr_1";
import { View_company_List } from "../pages/Gstr/view gstr/View_company_List";
import { View_3b_Form } from "../pages/Gstr/view gstr/View_3b_Form";
import { Update3b } from "../pages/Gstr/update/Update3b";
import { View_gst1_company } from "../pages/Gstr/view gstr/View_gst1_company";
import { View_gst1_form_list } from "../pages/Gstr/view gstr/View_gst1_form_list";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='*' element={<Page404 />} />
          <Route path='/' element={<Login />} />
          <Route path="/Employee-login" element={<Employee_login />} />
          <Route path="/supervisor-login" element={<Login_supervisor/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route element={<PrivateRoute />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='/add-employee' element={<Add_employee />} />
            <Route path="/view-employee" element={<View_Employees />} />
            <Route path="/add-customer" element={<Add_customer/>} />
            <Route path="/view-customer" element={<View_Customer/>} />
            <Route path="/add-project" element={<Add_Product/>} />
            <Route path="/view-project" element={<View_Project/>} />
            <Route path="/add-task" element={<Add_task/>} />
            <Route path="/view-task" element={<View_task/>} />
            <Route path="/add-gstr" element={<Gstr/>} />
            <Route path="/add-gstr-3b" element={<Add_Gstr_3b/>}/>
            <Route path="/view-gstr-3b" element={<View_Gstr_3b/>}/>
            <Route path="/view-company" element={<View_company_List/>}/>
            <Route path="/3b-form" element={<View_3b_Form/>}/>
            <Route path="/update-3b-form" element={<Update3b/>}/>
            <Route path="/add-gstr-1" element={<Add_Gstr_1/>}/>
            <Route path="/view-company-gstr1" element={<View_gst1_company/>}/>
            <Route path="/view-gstr1-form-list" element={<View_gst1_form_list/>}/>
          </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
