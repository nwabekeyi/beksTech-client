import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chidiebere from "./pages/chidiebere";
import Home from "./pages/home";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/chidiebere" element={<Chidiebere />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
