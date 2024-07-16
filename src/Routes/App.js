import "../css/index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login pages/Login";
import { Employee_login } from "../pages/Login pages/Employee_login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/Employee-login" element={<Employee_login />} />

          <Route element={<PrivateRoute />} >
            <Route path='/dashboard' element={<Dashboard />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
