import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/*import ExpenseItem from "./components/ExpenseItem";*/
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <HomePage></HomePage>
            <Footer></Footer>
        </div>
    );
}

export default App;
