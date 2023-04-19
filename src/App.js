import './App.css';
import Layout from "./components/loaut";
import Home from "./pages/home/home"
import {Route, Routes} from "react-router-dom";
import Community from "./pages/community/Community";
import Discover from "./pages/community/discover/Discover";
import Awords from "./pages/community/Awords";
import Celebs from "./pages/community/Celebs";
import Recent from "./pages/community/Recent";
import MoveDetals from "./pages/movedetals/MoveDetals";

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movie-details/:id" element={<MoveDetals/>}/>
                    <Route path="/community" element={<Community/>}/>
                    <Route path="/Discover" element={<Discover/>}/>
                    <Route path="/Awords" element={<Awords/>}/>
                    <Route path="/Celebs" element={<Celebs/>}/>
                    <Route path="/Recent" element={<Recent/>}/>
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
