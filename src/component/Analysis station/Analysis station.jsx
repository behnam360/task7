import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import img1 from "../../img/2023_ProductPage_Header_Busa_25thAnn_2500x1227.jpg";

const Analysisstation = () => (
  <Row>
    <Col xs={24} sm={24} md={12} lg={24}>
      <Card
        style={{
          background:
            "linear-gradient(360deg, #f7f7f7, #f7f7f7, #d0d0d0, #fefefeee)",
        }}
        title="ایستگاه تحلیل"
      >
        <Card
          style={{
            background:
              "linear-gradient(360deg, #f7f7f7, #f7f7f7, #d0d0d0, #fefefeee)",
          }}
          type="inner"
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#4d4d4d",
              }}
            >
              <span>آخرین تحلیل های فرمول یک</span>
              <a href="#" style={{ color: "#4d4d4d" }}>
                <i className="fa fa-rss-square"></i> آرشیو
              </a>
            </div>
          }
        >
          <section
            className="main-article"
            style={{
              borderRadius: "10px",
              margin: "0 30px",
              padding: "20px",
              direction: "rtl",
              fontFamily: "Tahoma, sans-serif",
              color: "#4d4d4d",
            }}
          >
            <a href="#">
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "20px",
                  transform: "scale(1.2)",
                }}
                src={img1}
                alt="خبر"
              />
            </a>
            <section className="main-article-caption">
              <h2 style={{ marginBottom: "10px" }}>
                مروری بر عملکرد خارق العاده سرجیو پرز در پیست های خیابانی
              </h2>
              <p className="main-f-p" style={{ marginBottom: "10px" }}>
                <span style={{ marginLeft: "10px" }}>
                  <Avatar icon={<UserOutlined />} /> سیدعلی حسینی
                </span>
                <span style={{ marginRight: "auto" }}>
                  آخرین خبرها, استرالیا
                </span>
              </p>
              <p className="main-s-p" style={{ marginBottom: "10px" }}>
                سرجیو پرز یکی از رانندگان خیلی خوب در پیست های خیابانی است، در
                این مقاله سعی داریم که چرایی این موضوع را بیشتر دریابیم....
                <a href="#" style={{ color: "#4d4d4d" }}>
                  ادامه...
                </a>
              </p>
            </section>
          </section>
          <section
            className="popular-post-item"
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <img
              src={img1}
              alt=""
              className="popular-post-item-img"
              style={{ width: "100px", height: "60px" }}
            />
            <section className="popular-post-item-caption" style={{ flex: 1 }}>
              <section>
                <h3 style={{ margin: 10 }}>
                  جیمز کی اخراج و تغییرات ساختاری جدید در مکلارن اعمال شد
                </h3>
              </section>
              <section
                className="writer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <span>
                  <i className="fa fa-user"></i> سید علی حسینی
                </span>
                <span>آخرین خبرها, استرالیا</span>
              </section>
            </section>
          </section>
          <section
            className="popular-post-item"
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <img
              src={img1}
              alt=""
              className="popular-post-item-img"
              style={{ width: "100px", height: "60px" }}
            />
            <section className="popular-post-item-caption" style={{ flex: 1 }}>
              <section>
                <h3 style={{ margin: 10 }}>
                  جیمز کی اخراج و تغییرات ساختاری جدید در مکلارن اعمال شد
                </h3>
              </section>
              <section
                className="writer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <span>
                  <i className="fa fa-user"></i> سید علی حسینی
                </span>
                <span>آخرین خبرها, استرالیا</span>
              </section>
            </section>
          </section>
          <section
            className="popular-post-item"
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <img
              src={img1}
              alt=""
              className="popular-post-item-img"
              style={{ width: "100px", height: "60px" }}
            />
            <section className="popular-post-item-caption" style={{ flex: 1 }}>
              <section>
                <h3 style={{ margin: 10 }}>
                  جیمز کی اخراج و تغییرات ساختاری جدید در مکلارن اعمال شد
                </h3>
              </section>
              <section
                className="writer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <span>
                  <i className="fa fa-user"></i> سید علی حسینی
                </span>
                <span>آخرین خبرها, استرالیا</span>
              </section>
            </section>
          </section>
          <section
            className="popular-post-item"
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <img
              src={img1}
              alt=""
              className="popular-post-item-img"
              style={{ width: "100px", height: "60px" }}
            />
            <section className="popular-post-item-caption" style={{ flex: 1 }}>
              <section>
                <h3 style={{ margin: 10 }}>
                  جیمز کی اخراج و تغییرات ساختاری جدید در مکلارن اعمال شد
                </h3>
              </section>
              <section
                className="writer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <span>
                  <i className="fa fa-user"></i> سید علی حسینی
                </span>
                <span>آخرین خبرها, استرالیا</span>
              </section>
            </section>
          </section>
          <section
            className="popular-post-item"
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <img
              src={img1}
              alt=""
              className="popular-post-item-img"
              style={{ width: "100px", height: "60px" }}
            />
            <section className="popular-post-item-caption" style={{ flex: 1 }}>
              <section>
                <h3 style={{ margin: 10 }}>
                  جیمز کی اخراج و تغییرات ساختاری جدید در مکلارن اعمال شد
                </h3>
              </section>
              <section
                className="writer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <span>
                  <i className="fa fa-user"></i> سید علی حسینی
                </span>
                <span>آخرین خبرها, استرالیا</span>
              </section>
            </section>
          </section>
        </Card>
      </Card>
    </Col>
  </Row>
);

export default Analysisstation;
