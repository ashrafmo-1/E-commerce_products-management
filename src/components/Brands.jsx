import { Col, Container, Row } from "react-bootstrap";
import beand1 from "../assets/images/brand/41DBT9pEGmS._AC_SY200_.jpg";
import beand2 from "../assets/images/brand/81uTW77d3rL._AC_SL1500_.jpg";
import beand3 from "../assets/images/brand/XCM_Manual_1498352_5199182_200x200_1X._CB604510533_.jpg";
import beand4 from "../assets/images/brand/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg";

export const Brands = () => {
  return (
    <Container>
      <Col>
        <Row>
          <div className={'flex-center gap-2 mb-5 mt-3'}>
            <div className={'box brand-box'}>
              <img src={beand1} alt="" />
              <p className={'brand-content-box'}>
                <span>brand name</span>
              </p>
            </div>
            <div className={'box brand-box'}>
              <img src={beand2} alt="" />
              <p className={'brand-content-box'}>
                <span>brand name</span>
              </p>
            </div>
            <div className={'box brand-box'}>
              <img src={beand1} />
              <p className={'brand-content-box'}>
                <span>brand name</span>
              </p>
            </div>
            <div className={'box brand-box'}>
              <img src={beand3} />
              <p className={'brand-content-box'}>
                <span>brand name</span>
              </p>
            </div>
            <div className={'box brand-box'}>
              <img src={beand4} />
              <p className={'brand-content-box'}>
                <span>brand name</span>
              </p>
            </div>
          </div>
        </Row>
      </Col>
    </Container>
  );
};
export default Brands;