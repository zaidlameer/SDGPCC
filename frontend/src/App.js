import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/*import ExpenseItem from "./components/ExpenseItem";*/
import NavigationBar from "./components/NavigationBar";
import Consultation from "./pages/Consultation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {LoginPage} from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/consultation'} element={<Consultation/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/signup'} element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
