import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Form, Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

const LoginPage = () => {
  const { Content } = Layout;
  const FormItem = Form.Item;

  const history = useHistory();

  const [name, setName] = useState("");

  const login = () => {
    localStorage.setItem("user", name);
    history.push("/");
  };

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
            <Form className="login-form">
              <FormItem>
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Username"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<KeyOutlined />}
                  type="password"
                  placeholder="Password"
                />
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={() => login()}
                >
                  Log in
                </Button>
              </FormItem>
            </Form>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LoginPage;
