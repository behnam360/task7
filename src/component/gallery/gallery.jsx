import React from "react";
import { Row, Col } from "antd";
import img1 from "../../img/2023_ProductPage_Header_Busa_25thAnn_2500x1227.jpg";
import img2 from "../../img/suz-2023_busa_actionphotos_5_2560x1400.jpg";

const ImageLayout = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        {/* Left Side */}
        <Col xs={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col xs={13}>
              <img
                src={img1}
                alt="Description of image 1"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={11}>
              <img
                src={img2}
                alt="Description of image 2"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={24}>
              <img
                src={img1}
                alt="Description of image 3"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </Col>
        {/* Right Side */}
        <Col xs={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <img
                src={img2}
                alt="Description of image 4"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={13}>
              <img
                src={img1}
                alt="Description of image 5"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={11}>
              <img
                src={img2}
                alt="Description of image 6"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ImageLayout;
