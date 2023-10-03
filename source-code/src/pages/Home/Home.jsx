import Brands from "../../components/Brands";
import Swiper from "../../components/Home/Swiper";
import Product from "../product/Products";
import NavgationBar from "../../components/NavgationBar";

const Home = () => {
  return (
    <>
      <NavgationBar />
      <div className={'d-flex justify-content-between'}>
          <h1>taps links</h1>
          <Swiper />
      </div>
      <Brands />
      <Product />
    </>
  );
};
export default Home;
