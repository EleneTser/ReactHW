import MainNavbar from "./Components/MainNavbar";
import MainPage from "./Components/MainPage";
import Footer from './Components/Footer'
import './App.css'
 
function App() {


    return (
        <>

            <div className="min-h-screen bg-[#121212] text-white ">
            <MainNavbar />
            <div className="flex flex-col gap-16">
                <MainPage />
                <Footer />
            </div>
            </div>
        </>
    );
}

export default App;