import React, { useState } from "react";
import { Layout, Form, Input, Button, Col, Row, Checkbox, Radio } from "antd";

import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";
import "antd/dist/antd.css";

export const AboutPage = () => {
  const { Content } = Layout;

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
                      label="Site name"
                      name="siteName"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Site name" />
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
                      <Input placeholder="Input Elevation" />
                    </Form.Item>

                    <Form.Item
                      label="Site Code"
                      name="siteCode"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Site Code" />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Mast Elevation"
                      name="mastElevation"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Mast Elevation" />
                    </Form.Item>
                    <Form.Item
                      label="Site Type"
                      name="siteType"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input placeholder="Input Site Type" />
                    </Form.Item>

                    <Form.Item
                      label="Latitude"
                      name="latitude"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Latitude" />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Organization"
                      name="organization"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Organization" />
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
                      <Input placeholder="Input Longitude" />
                    </Form.Item>

                    <Form.Item
                      label="Category"
                      name="category"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Category" />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Network"
                      name="network"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Network" />
                    </Form.Item>
                    <Form.Item
                      label="Power Supply"
                      name="powerSupply"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input placeholder="Input Power Supply" />
                    </Form.Item>

                    <Form.Item
                      label="Equipment Owner"
                      name="equipmentOwner"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Equipment Owner" />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="State/Province"
                      name="State/Province"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input State/Province" />
                    </Form.Item>
                    <Form.Item
                      label="Land Owner"
                      name="landOwner"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input placeholder="Input Land Owner" />
                    </Form.Item>

                    <Form.Item
                      label="Region"
                      name="region"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Region" />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Equipment Housing"
                      name="equipmentHousing"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Equipment Housing" />
                    </Form.Item>
                    <Form.Item
                      label="Location"
                      name="location"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                        margin: "0 8px",
                      }}
                    >
                      <Input placeholder="Input Location" />
                    </Form.Item>

                    <Form.Item
                      label="Site Topography"
                      name="siteTopography"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Site Topography" />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="City"
                      name="city"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input City" />
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
                      <Input placeholder="Input Description" />
                    </Form.Item>

                    <Form.Item
                      label="Municipality"
                      name="municipality"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Municipality" />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                      label="Zip code"
                      name="zipcode"
                      style={{
                        display: "inline-block",
                        width: "calc(33% - 8px)",
                      }}
                    >
                      <Input placeholder="Input Zip code" />
                    </Form.Item>
                    <Form.Item
                      label=""
                      style={{
                        display: "inline-block",
                        marginLeft: "8px",
                        marginTop: "30px",
                      }}
                    >
                      <Button>Button</Button>
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
                    height: "auto",
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
