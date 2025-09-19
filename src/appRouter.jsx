import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chidiebere from "./pages/chidiebere";
import SignIn from "./pages/chidiebere/projectadmin/SignIn";
import AdminProjectPage from "./pages/chidiebere/projectadmin/AdminProject";
import Home from "./pages/home";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/chidiebere" element={<Chidiebere />} />
                <Route path="/admin" element={<AdminProjectPage/>}/>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
