import React from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";

const Navbar = () => {
  const { SubMenu } = Menu;
  const history = useHistory();

  const token = localStorage.getItem("token");

  return (
    <Layout.Header className="header" style={{ margin: 0, padding: 0 }}>
      <Menu selectedKeys={3} mode="horizontal">
        <Menu.Item
          key="home"
          icon={<HomeOutlined />}
          onClick={() => {
            localStorage.setItem("path", null);
            history.push("/");
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="about"
          icon={<AppstoreOutlined />}
          onClick={() => {
            localStorage.setItem("path", null);
            history.push("/");
          }}
          disabled={token ? false : true}
        >
          About
        </Menu.Item>
        {/* <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Time line"
          disabled={user ? false : true}
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="SubMenu1"
          icon={<SettingOutlined />}
          title="Manage"
          disabled={user ? false : true}
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
        {token ? (
          <Menu.Item
            key="logout"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              history.push("/login");
            }}
          >
            Logout
          </Menu.Item>
        ) : (
          <Menu.Item
            key="login"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Menu.Item>
        )}
      </Menu>
    </Layout.Header>
  );
};

export default Navbar;
