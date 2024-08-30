import React from "react";
import { Card, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import img1 from "../../img/2023_ProductPage_Header_Busa_25thAnn_2500x1227.jpg";

const News = () => (
  <Row>
    <Col xs={24} sm={24} md={12} lg={24}>
      <Card
        style={{ backgroundColor: "#2d3748" }}
        title={<span style={{ color: "white" }}>خبر</span>}
      >
        <Card
          style={{ backgroundColor: "#2d3748" }}
          type="inner"
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#fff",
              }}
            >
              <span>آخرین خبرهای فرمول یک</span>
              <a href="#" style={{ color: "#fff" }}>
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
              color: "#fff",
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
                بارش باران در تمرین دوم فرمول یک استرالیا 2023
              </h2>
              <p className="main-f-p" style={{ marginBottom: "10px" }}>
                <span style={{ marginLeft: "10px", color: "#fff" }}>
                  <Avatar icon={<UserOutlined />} /> سیدعلی حسینی
                </span>
                <span style={{ marginRight: "auto", color: "#fff" }}>
                  آخرین خبرها, استرالیا
                </span>
              </p>
              <p className="main-s-p" style={{ marginBottom: "10px" }}>
                با توجه به اینکه در مرحله دوم تمرینی فرمول یک استرالیا تنها 20
                دقیقه پیست خشک بود، فرناندو آلونسو توانست با ثبت زمانی به ...
                <a href="#" style={{ color: "#fff" }}>
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
                <h3 style={{ margin: 10, color: "#fff" }}>
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
                <span style={{ color: "#fff" }}>
                  <i className="fa fa-user"></i> سید علی حسینی
                </span>
                <span style={{ color: "#fff" }}>آخرین خبرها, استرالیا</span>
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
                <h3 style={{ margin: 10, color: "#fff" }}>
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
                <span style={{ color: "#fff" }}>
                  <i className="fa fa-user"></i> سید علی حسینی
                </span>
                <span style={{ color: "#fff" }}>آخرین خبرها, استرالیا</span>
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
                <h3 style={{ margin: 10, color: "#fff" }}>
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
                <span style={{ color: "#fff" }}>
                  <i className="fa fa-user"></i> سید علی حسینی
                </span>
                <span style={{ color: "#fff" }}>آخرین خبرها, استرالیا</span>
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
                <h3 style={{ margin: 10, color: "#fff" }}>
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
                <span style={{ color: "#fff" }}>
                  <i className="fa fa-user"></i> سید علی حسینی
                </span>
                <span style={{ color: "#fff" }}>آخرین خبرها, استرالیا</span>
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
                <h3 style={{ margin: 10, color: "#fff" }}>
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
                <span style={{ color: "#fff" }}>
                  <i className="fa fa-user"></i> سید علی حسینی
                </span>
                <span style={{ color: "#fff" }}>آخرین خبرها, استرالیا</span>
              </section>
            </section>
          </section>
        </Card>
      </Card>
    </Col>
  </Row>
);

export default News;
