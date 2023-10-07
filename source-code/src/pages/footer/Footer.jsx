import "./Footer.css";
import visa from "../../assets/images/pay.png";
import app from "../../assets/images/app.jpg";
import play from "../../assets/images/play.jpg";

export default function Footer() {
  return (
    <>
      <div className="Container">
        <h1 className="logo text-center"> Yourlogo</h1>
        <div className="contact gap-4 p-5 mt-5">
          <div style={{ display: "flex", gap: "25px" }} className="cont">
            <div>
              <h3>About</h3>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
            </div>
            <div>
              <h3>Careers</h3>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
            </div>
            <div>
              <h3>press</h3>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
            </div>
            <div>
              <h3>Customer Care</h3>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
            </div>
            <div>
              <h3>Services</h3>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
              <p>span</p>
            </div>
          </div>
          <div className="enter flex-column d-flex gap-3 mb-3">
            <h5 style={{ fontSize: "15px" }}>Get the freshest news from us</h5>
            <div>
              <input
                placeholder="Enter your email"
                className="input"
                name="email"
                type="email"
              />
              <button className="button">Subscribe</button>
            </div>
            <img src={visa} alt="" />
            <img src={app} alt="" />
            <img src={play} alt="" />
          </div>
          <div className="line"></div>
        </div>
        <div className="contact">
          <div style={{ gap: "25px" }} className="cont2">
            <h3>Terms & Conditions |</h3>
            <h3> Privacy Policy |</h3>
            <h3> Accessibility |</h3>
            <h3> Legal |</h3>
          </div>
          <div>
            <h3 style={{ fontSize: "10px" }}>
              Design with love © TanahAirStudio 2020. All right reserved
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
