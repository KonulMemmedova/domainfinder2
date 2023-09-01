import {Routes, Route} from "react-router-dom";
import About from "../pages/About";
import Detail from "../pages/Details";
import Home from "../pages/Home";
import Results from "../pages/Results";
import NoPage from "../Elements/NoPage";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/results" element={<Results />} />
            <Route path="/results/:id" element={<Detail />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    );
};

export default Routing;