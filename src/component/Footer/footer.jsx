import React from "react";
import { Layout, Row, Col, Typography, Image, List } from "antd";
import "./Footer.css";
import img1 from "../../img/logo.png";
import img2 from "../../img/Motorsportitran-icon.webp";

const { Footer } = Layout;
const { Title, Paragraph } = Typography;

const footerItems = [
  "ثبت نام",
  "توییت",
  "خبر",
  "عکس",
  "ویدیو",
  "قیمت خودرو",
  "قوانین",
  "تماس با ما",
];

const CustomFooter = () => (
  <Footer className="footer">
    <Row className="top-footer app">
      <Col span={12} className="right-side">
        <Paragraph className="text-white">
          تمام حقوق مادی و معنوی محتواهای این رسانه متعلق به گروه موتوراسپورت و
          فرمول یک ایران میباشد.
        </Paragraph>
        <Title level={3} style={{ color: "white" }}>
          حق نشر © 2015 – 2022 فرمول یک ایران
        </Title>
      </Col>
      <Col span={12} className="left-side">
        <Image src={img2} alt="motor" />
        <Image src={img1} alt="logo" />
      </Col>
    </Row>
    <div className="clear-fix"></div>
    <List
      className="footer-list"
      grid={{ gutter: 16, column: 8 }}
      dataSource={footerItems}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </Footer>
);

export default CustomFooter;
