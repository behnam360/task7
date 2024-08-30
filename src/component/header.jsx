import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import {
  MenuOutlined,
  SearchOutlined,
  HomeOutlined,
  TrophyOutlined,
  CarOutlined,
  PhoneOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  FlagOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import img1 from "../img/F1Iran-logo.webp";
import img2 from "../img/Instagram.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    { key: "home", icon: <HomeOutlined />, label: "خانه" },
    { key: "trophy", icon: <TrophyOutlined />, label: "مشاهیر" },
    { key: "motorsport", icon: <CarOutlined />, label: "موتور اسپورت" },
    { key: "car", icon: <CarOutlined />, label: "خودرو" },
    { key: "formula1", icon: <FlagOutlined />, label: "فرمول یک" },
    { key: "shop", icon: <ShoppingCartOutlined />, label: "فروشگاه" },
    { key: "contact", icon: <PhoneOutlined />, label: "تماس" },
    { key: "signup", icon: <LoginOutlined />, label: "ثبت نام" },
    { key: "login", icon: <UserOutlined />, label: "ورود" },
  ];

  return (
    <nav style={{ height: "200px" }} className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row justify-between w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
          <img
            src={img1}
            alt="F1 Iran logo"
            className="w-1/3 md:w-auto md:order-2 "
          />
          <img
            src={img2}
            alt="Instagram logo"
            className="w-1/ md:w-auto md:order-1"
          />
        </div>
        <div className="flex justify-between items-center w-full md:w-auto mt-4 md:mt-0">
          <Button
            type="text"
            icon={<SearchOutlined />}
            className="text-white"
            aria-label="Search"
          />
          <Button
            type="text"
            icon={<MenuOutlined />}
            className="text-white block md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }} className="mt-4 md:mt-0 ">
        {!isMobile && (
          <Menu
            mode="horizontal"
            className="flex justify-center space-x-4"
            items={menuItems}
          />
        )}
      </div>
      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={toggleMenu}
        visible={isOpen}
        className="md:hidden"
      >
        <Menu mode="vertical" items={menuItems} />
      </Drawer>
    </nav>
  );
};

export default Navbar;
