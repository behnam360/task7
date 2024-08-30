import React from "react";
import { Row, Col } from "antd";
import {
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const socialMediaLinks = [
  { href: "", icon: <InstagramOutlined />, alt: "Instagram" },
  { href: "", icon: <MessageOutlined />, alt: "Telegram" }, // Using MessageOutlined as an alternative
  { href: "", icon: <TwitterOutlined />, alt: "Twitter" },
  { href: "", icon: <YoutubeOutlined />, alt: "YouTube" },
];

const SocialMedia = () => (
  <div
    style={{
      padding: "20px",
      backgroundColor: "#ffab2a",
      width: "100%",
      textAlign: "center",
      padding: "30px 0",
      borderRadius: "10px",
      boxShadow: "0 0 10px #c5c5c5",
    }}
  >
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h2>فرمول یک ایران را دنبال کنید</h2>
    </div>
    <Row justify="center" gutter={[16, 16]}>
      {socialMediaLinks.map((link, index) => (
        <Col key={index} xs={8} sm={6} md={4} lg={3} xl={2}>
          <a href={link.href} style={{ fontSize: "2em", color: "#0c0c0c" }}>
            {link.icon}
          </a>
        </Col>
      ))}
    </Row>
  </div>
);

export default SocialMedia;
