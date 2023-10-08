import "./Footer.css";
import visa from "../../assets/images/pay.png";
import app from "../../assets/images/app.jpg";
import play from "../../assets/images/play.jpg";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="Container">
      <Container>
        <h1 className="logo text-center pt-2 text-warning">Dragon store</h1>
        <div className="contact my-5">
          <div className="categories-section d-flex gap-5">
            <div className="categorys-sect">
              <h3 className="section-info-header fs-5 mb-3 fw-bold">workers</h3>
              <p className="links fs-6 mb-1">ashraf mohamed</p>
              <p className="links fs-6 mb-1">mahmoud mohamed</p>
            </div>
            <div className="categorys-sect">
              <h3 className="section-info-header fs-5 mb-3 fw-bold">
                Categories
              </h3>
              <p className="fs-6 mb-1">laptops</p>
              <p className="fs-6 mb-1">phons</p>
              <p className="fs-6 mb-1">computer</p>
              <p className="fs-6 mb-1">foods</p>
              <p className="fs-6 mb-1">Jewelry</p>
              <p className="fs-6 mb-1">Clothing</p>
            </div>
            <div className="categorys-sect">
              <h3 className="section-info-header fs-5 mb-3 fw-bold">brends</h3>
              <p className="fs-6 mb-1">nike</p>
              <p className="fs-6 mb-1">asus</p>
              <p className="fs-6 mb-1">hp</p>
              <p className="fs-6 mb-1">dell</p>
            </div>
          </div>
          <div className="enter flex-column d-flex gap-3 mb-3">
            <h5 style={{ fontSize: "15px" }}>Get the freshest news from us</h5>
            <form className="footForm">
              <input
                placeholder="Enter your email"
                className="input-footer"
                name="email"
                type="email"
              />
              <button className="button bg-warning fw-bold">
                Subscribe
              </button>
            </form>
            <img src={visa} alt="" />
            <div className="d-flex gap-1">
              <img src={app} alt="" />
              <img src={play} alt="" />
            </div>
          </div>
        </div>
        <div className="foot d-flex justify-content-between">
          <div className="d-flex">
            <p>Terms & Conditions |</p>
            <p> Privacy Policy |</p>
            <p> Accessibility |</p>
            <p> Legal |</p>
          </div>
          <div>
            <p> Design with love © TanahAirStudio 2020. All right reserved </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
