import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/*import ExpenseItem from "./components/ExpenseItem";*/

import NavigationBar from "./components/NavigationBar";
import homePage from "./pages/HomePage";
import HomePage from "./pages/HomePage";



function App() {
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <HomePage></HomePage>
        </div>
    );
}

export default App;
