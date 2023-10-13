import Brands from "../../components/Brands";
import Swiper from "../../components/Home/Swiper";
import Product from "../product/Products";
import NavgationBar from "../../components/NavgationBar";
import Offer from "../../components/Offer";
import MainHeader from "../../components/MainHeader";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <NavgationBar />
      <div
        className={
          "home-header-container d-flex justify-content-between m-2 p-2 bg-secondary-subtle gap-4 h-100"
        }
      >
        <Swiper />
        <div className="home-header-imagebg">
          <div className="content">
            <p>dragon store</p>
            <Link to="/allproducts" className="btn btn-success">
              dragon store
            </Link>
          </div>
        </div>
      </div>
      <Brands />
      <Offer />
      <Product />
      <Footer />
    </>
  );
};
export default Home;
