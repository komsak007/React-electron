import React from "react";
import { Layout } from "antd";

import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";
import "antd/dist/antd.css";

export const HomePage = () => {
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
              paddingTop: 20,
              margin: 0,
              // minHeight: 280,
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                margin: 0,
                padding: 0,
              }}
              src="https://picsum.photos/1920/1080"
              alt=""
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
