import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Layout, Form, Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

const LoginPage = () => {
  const { Content } = Layout;
  const FormItem = Form.Item;

  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:8000/api/login", {
        username,
        password,
      })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Login Success", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });

        history.push("/");
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    // history.push("/");
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
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </FormItem>
              <FormItem>
                <Input
                  prefix={<KeyOutlined />}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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
