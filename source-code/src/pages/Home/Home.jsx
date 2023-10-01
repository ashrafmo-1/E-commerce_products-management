import Brands from "../../components/Brands";
import Swiper from "../../components/Home/Swiper";
import Product from "../product/Products";
import NavgationBar from "../../components/NavgationBar";

const Home = () => {
  return (
    <>
      <NavgationBar />
      <Swiper />
      <Brands />
      <Product />
    </>
  );
};
export default Home;
