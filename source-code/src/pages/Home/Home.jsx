import Brands from "../../components/Brands";
import Swiper from "../../components/Home/Swiper";
import Product from "../product/Products";
import NavgationBar from "../../components/NavgationBar";
import {Link} from "react-router-dom";
import Offer from "../../components/Offer";

const Home = () => {
  return (
    <>
      <NavgationBar />
      <div className={'d-flex justify-content-between m-2 p-2 bg-secondary-subtle'} style={{borderRadius: '4px'}}>
        <div className={'w-25 d-flex flex-column Categories-section-home pb-3'} style={ {background: '#001d3d', height: '300px'}}>
            <Link className={'p-2 mx-3 my-1 mt-2 text-body Categories-section-link'} to={'/'}>mobile</Link>
            <Link className={'p-2 mx-3 my-1 text-body Categories-section-link'} to={'/'}>shirts</Link>
            <Link className={'p-2 mx-3 my-1 text-body Categories-section-link'} to={'/'}>haha</Link>
            <Link className={'p-2 mx-3 my-1 text-body Categories-section-link'} to={'/'}>haha</Link>
            <Link className={'p-2 mx-3 my-1 text-body Categories-section-link'} to={'/'}>haha</Link>
            <Link className={'p-2 mx-3 my-1 text-body Categories-section-link'} to={'/'}>haha</Link>
        </div>
          <Swiper />
      </div>
      <Brands />
        <Offer />
      <Product />
    </>
  );
};
export default Home;