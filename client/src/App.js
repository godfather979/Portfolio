import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  SetPortfolioData,
  ShowLoading,
  ReloadData,
} from "./redux/rootSlice";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";
import Courses from "./pages/Home/Courses";
import Contact from "./pages/Home/Contact";
import Conference from "./pages/Home/Conference";
import ORActivities from "./pages/Home/ORActivities";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Footer from "./components/Footer";
import Flagship from "./pages/Home/Flagship";
import Fundedprojects from "./pages/Home/Fundedprojects"

const App = () => {
  const dispatch = useDispatch();
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
    } catch (error) {
      console.error("Failed to fetch portfolio data:", error);
    } finally {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData]);

  return (
    <BrowserRouter>
      <RoutesWithNavbarAndFooter loading={loading} />
    </BrowserRouter>
  );
};

const RoutesWithNavbarAndFooter = ({ loading }) => {
  const location = useLocation(); // Get the current route

  // Determine if the current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {loading && <Loader />}
      {!isAdminRoute && <Navbar />} {/* Conditionally render Navbar */}
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
        
        <Route path="/projects" element={<Fundedprojects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/oractivities" element={<ORActivities />} />
        
        <Route path="/events" element={<Flagship />} />
        
        

       
      </Routes>
      {!isAdminRoute && <Footer />} {/* Conditionally render Footer */}
    </>
  );
};


export default App;
