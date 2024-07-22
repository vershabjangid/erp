import "../css/index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login pages/Login";
import { Employee_login } from "../pages/Login pages/Employee_login";
import { Add_employee } from "../pages/add pages/Add_employee";
import { View_Employees } from "../pages/view pages/View_Employees";
import { Edit_employee } from "../pages/Edit pages/Edit_employee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/Employee-login" element={<Employee_login />} />

          <Route element={<PrivateRoute />} >
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/add-employee' element={<Add_employee />} />
            <Route path="/view-employee" element={<View_Employees />} />
            <Route path="/edit-employee" element={<Edit_employee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
