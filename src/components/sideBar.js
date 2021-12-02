import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Layout, Menu, Form, Input, Button, Tree, Switch } from "antd";
import {
  BankOutlined,
  ApartmentOutlined,
  ApiOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import Navbar from "../components/navbar";
import "antd/dist/antd.css";

const treeData = [
  {
    title: "Site",
    key: "0-0",
    icon: <BankOutlined />,
    children: [
      {
        title: "TRAT",
        key: "0-0-0",
        value: "123",
        icon: <ApartmentOutlined />,
        children: [
          {
            title: "PM10 [1]",
            key: "0-0-0-0",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-0",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "PM2.5 [2]",
            key: "0-0-0-1",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-1",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "CO [3]",
            key: "0-0-0-3",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-3",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "NO2 [4]",
            key: "0-0-0-4",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-4",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "SO2 [5]",
            key: "0-0-0-5",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-5",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "O3 [6]",
            key: "0-0-0-6",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-6",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "WS [7]",
            key: "0-0-0-7",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-7",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "WD [8]",
            key: "0-0-0-8",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-8",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "TEMP [9]",
            key: "0-0-0-9",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-9",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "RH [10]",
            key: "0-0-0-10",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-10",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "BP [11]",
            key: "0-0-0-11",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-11",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "RAIN [12]",
            key: "0-0-0-12",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-12",
                icon: <SettingOutlined />,
              },
            ],
          },
          {
            title: "TEMP [13]",
            key: "0-0-0-13",
            icon: <ApiOutlined />,
            children: [
              {
                title: "Calibration",
                key: "0-0-0-0-13",
                icon: <SettingOutlined />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Sequence",
    key: "0-1",
    icon: <ApartmentOutlined />,
    children: [
      {
        title: "parent 2-0",
        key: "0-1-0",
        icon: <ApartmentOutlined />,
        children: [
          { title: "leaf", key: "0-1-0-0", icon: <ApartmentOutlined /> },
          { title: "leaf", key: "0-1-0-1", icon: <ApartmentOutlined /> },
        ],
      },
    ],
  },
];

const SideBar = () => {
  const { Sider } = Layout;
  const history = useHistory();

  const handleSelected = (e) => {
    // console.log(e[0] == "0-0-0");
    switch (e[0]) {
      case "0-0-0":
        history.push("/about");
        break;

      case "0-0-0-0":
        history.push("/chanel");
        break;

      case "0-0-0-0-0":
        history.push("/calibrate");
        break;

      default:
        break;
    }
  };

  return (
    <Sider
      width={200}
      className="site-layout-background"
      style={{ backgroundColor: "#fff" }}
    >
      <div>
        <Tree
          // showLine
          showIcon
          defaultExpandedKeys={["0-0-0"]}
          treeData={treeData}
          onSelect={handleSelected}
        />
      </div>
    </Sider>
  );
};
export default SideBar;
