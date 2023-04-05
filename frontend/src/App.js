import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/*import ExpenseItem from "./components/ExpenseItem";*/
import NavigationBar from "./components/NavigationBar";
import Consultation from "./pages/Consultation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Login from "./pages/login";


function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/consultation'} element={<Consultation/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/signup'} element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        
        </div>
    );
}

export default App;
