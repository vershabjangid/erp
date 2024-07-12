import "../css/index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Dashboard } from "../pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />

          <Route element={<PrivateRoute/>} >
            <Route path='dashboard' element={<Dashboard />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
