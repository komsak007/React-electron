import React from "react";
import { useHistory } from "react-router-dom";
import { Layout, Form, Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";
import "antd/dist/antd.css";

export const HomePage = () => {
  const history = useHistory();

  const { Content } = Layout;

  return (
    <Layout style={{ height: "100vh" }}>
      <Navbar />
      <Layout>
        <SideBar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Home Page
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
