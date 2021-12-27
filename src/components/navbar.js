import React from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";

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
        {token ? (
          <>
            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Manager">
              <Menu.ItemGroup title="User">
                <Menu.Item key="user">Manage User</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Site & Sensor">
                <Menu.Item key="site">Manage Site</Menu.Item>
                <Menu.Item key="sensor">Manage Sensor</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
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
          </>
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
