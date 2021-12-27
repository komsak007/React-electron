import React, { useState, useEffect } from "react";
import { Layout, Form, Input, Button, Col, Row, Checkbox, Radio } from "antd";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";
import "antd/dist/antd.css";

export const GetSitePage = () => {
  const { Content } = Layout;
  const history = useHistory();
  const param = useParams();
  const [form] = Form.useForm();

  const [data, setData] = useState({
    site_id: "",
    site_name: "",
    site_code: "",
    site_type: "",
    organization: "",
    category: "",
    power_supply: "",
    state: "",
    region: "",
    location: "",
    city: "",
    municipality: "",
    zip_code: "",
    elevation: "",
    master_elevation: "",
    latitude: "",
    longitude: "",
    network: "",
    equipment_owner: "",
    land_owner: "",
    equipment_housing: "",
    site_topography: "",
    description: "",
  });

  useEffect(() => {
    loadData();
  }, [param.site_name]);

  const loadData = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(`http://localhost:8000/api/site/${param.site_name}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setData(data);
        form.setFieldsValue(data);
        // console.log(data);
      });
  };

  const handleChange = (name) => (e) => {
    // console.log(`${name} = ${e.target.value}`);
    setData({ ...data, [name]: e.target.value });
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    await axios
      .put(`http://localhost:8000/api/site/edit/${param.site_name}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setData({});
        toast.success(`${result.data.msg}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => {
            history.push("/");
          },
        });
      })
      .catch((err) => {
        toast.error(err.response.data.err, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    console.log(data);
  };

  return (
    <Layout style={{ height: "auto" }}>
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
            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              justify="space-around"
            >
              <Col className="gutter-row" span={12}>
                <Form
                  form={form}
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 20,
                  }}
                  layout="horizontal"
                  initialValues={{
                    size: "small",
                  }}
                  size="small"
                >
                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Site Id"
                      name="site_id"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Site Id"
                        onChange={handleChange("site_id")}
                        style={{
                          color: "red",
                        }}
                        disabled
                      />
                    </Form.Item>
                    <Form.Item
                      label="Site Name"
                      name="site_name"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input
                        placeholder="Site Name"
                        onChange={handleChange("site_name")}
                        style={{
                          color: "red",
                        }}
                        disabled
                      />
                    </Form.Item>

                    <Form.Item
                      label="Site Code"
                      name="site_code"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Site Code"
                        onChange={handleChange("site_code")}
                      />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Site Type"
                      name="site_type"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Site Type"
                        onChange={handleChange("site_type")}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Organization"
                      name="organization"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input
                        placeholder="Organization"
                        onChange={handleChange("organization")}
                      />
                    </Form.Item>

                    <Form.Item
                      label="Category"
                      name="category"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Category"
                        onChange={handleChange("category")}
                      />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Power Supply"
                      name="power_supply"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Power Supply"
                        onChange={handleChange("power_supply")}
                      />
                    </Form.Item>
                    <Form.Item
                      label="State"
                      name="state"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input
                        placeholder="State"
                        onChange={handleChange("state")}
                      />
                    </Form.Item>

                    <Form.Item
                      label="Region"
                      name="region"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Region"
                        onChange={handleChange("region")}
                      />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Location"
                      name="location"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Location"
                        onChange={handleChange("location")}
                      />
                    </Form.Item>
                    <Form.Item
                      label="City"
                      name="city"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input
                        placeholder="City"
                        onChange={handleChange("city")}
                      />
                    </Form.Item>

                    <Form.Item
                      label="Municipality"
                      name="municipality"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Municipality"
                        onChange={handleChange("municipality")}
                      />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Zip Code"
                      name="zip_code"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Zip Code"
                        onChange={handleChange("zip_code")}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Elevation"
                      name="elevation"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input
                        placeholder="Elevation"
                        onChange={handleChange("elevation")}
                      />
                    </Form.Item>

                    <Form.Item
                      label="Master Elevation"
                      name="master_elevation"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Master Elevation"
                        onChange={handleChange("master_elevation")}
                      />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Latitude"
                      name="latitude"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Latitude"
                        onChange={handleChange("latitude")}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Longitude"
                      name="longitude"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input
                        placeholder="Longitude"
                        onChange={handleChange("longitude")}
                      />
                    </Form.Item>

                    <Form.Item
                      label="Network"
                      name="network"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Network"
                        onChange={handleChange("network")}
                      />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Equipment Owner"
                      name="equipment_owner"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Equipment Owner"
                        onChange={handleChange("equipment_owner")}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Land Owner"
                      name="land_owner"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input
                        placeholder="Land Owner"
                        onChange={handleChange("land_owner")}
                      />
                    </Form.Item>

                    <Form.Item
                      label="Equipment Housing"
                      name="equipment_housing"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Equipment Housing"
                        onChange={handleChange("equipment_housing")}
                      />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Site Topography"
                      name="site_topography"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input
                        placeholder="Site Topography"
                        onChange={handleChange("site_topography")}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Description"
                      name="description"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input
                        placeholder="Description"
                        onChange={handleChange("description")}
                      />
                    </Form.Item>

                    <Form.Item
                      label=""
                      style={{
                        display: "inline-block",
                        marginLeft: "8px",
                        marginTop: "30px",
                      }}
                    >
                      <Button
                        type="primary"
                        style={{ borderRadius: 5 }}
                        onClick={handleSubmit}
                      >
                        Update Site
                      </Button>
                    </Form.Item>
                  </Form.Item>
                </Form>
              </Col>
              <Col span={1}>
                <div
                  style={{
                    top: "0",
                    backgroundColor: "#7070db",
                    border: "1px solid #7070db",
                    width: "0",
                    height: "100%",
                  }}
                ></div>
              </Col>
              <Col className="gutter-row" span={11}>
                <Form
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 100,
                  }}
                  layout="horizontal"
                  initialValues={{
                    size: "small",
                  }}
                  size="small"
                >
                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Save Instant Data to Files"
                      name="Files"
                      style={{
                        display: "inline-block",
                        width: "calc(100%)",
                      }}
                    >
                      <Checkbox />
                      <span> every </span>
                      <Input size="small" style={{ width: "40px" }} />{" "}
                      <span>Seccond</span>
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Save Instant Data for Calibate"
                      name="Calibate"
                      style={{
                        display: "inline-block",
                        width: "calc(100%)",
                      }}
                    >
                      <Checkbox style={{ marginRight: 10 }} />
                      <Input size="small" style={{ width: "40px" }} />{" "}
                      <span>Days Back</span>
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Calc. average (> 1 minute and <= 60 minute) using "
                      name="minute"
                      style={{
                        display: "inline-block",
                        width: "calc(100%)",
                      }}
                    >
                      <Radio.Group name="radiogroup" defaultValue={1}>
                        <Radio value={1}>Instant</Radio>
                        <Radio value={2}>1 Minute</Radio>
                      </Radio.Group>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        label="Calc. average (> 60 minute and <= 24 Hours) using "
                        name="hour"
                        style={{
                          display: "inline-block",
                          width: "calc(100%)",
                        }}
                      >
                        <Radio.Group name="radiogroup" defaultValue={1}>
                          <Radio value={1}>Instant</Radio>
                          <Radio value={2}>1 Minute</Radio>
                          <Radio value={3}>60 Minute</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Form.Item>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
