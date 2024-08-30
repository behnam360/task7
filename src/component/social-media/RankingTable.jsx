import React from "react";
import { Table } from "antd";
import "../social-media/style/RankingTable.css";

const columns = [
  {
    title: "pos",
    dataIndex: "pos",
    key: "pos",
    className: "td-bg",
  },
  {
    title: "تیم",
    dataIndex: "team",
    key: "team",
  },
  {
    title: "امتیاز",
    dataIndex: "points",
    key: "points",
    className: "td-bg-2",
  },
];

const data = [
  { key: 1, pos: 1, team: "Redbull racing", points: 87 },
  { key: 2, pos: 2, team: "Aston martin", points: 38 },
  { key: 3, pos: 3, team: "Mercedes", points: 38 },
  { key: 4, pos: 4, team: "Ferari", points: 26 },
  { key: 5, pos: 5, team: "Alpine", points: 8 },
  { key: 6, pos: 6, team: "Alfa romeo", points: 4 },
  { key: 7, pos: 7, team: "Hass", points: 1 },
  { key: 8, pos: 8, team: "williams", points: 1 },
  { key: 9, pos: 9, team: "Mac laren", points: 0 },
  { key: 10, pos: 10, team: "Alfa tauri", points: 0 },
];

const RankingTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={false}
    className="maker-table"
  />
);

export default RankingTable;
