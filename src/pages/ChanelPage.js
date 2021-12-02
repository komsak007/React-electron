import React from "react";
import { Col, Divider, Layout, Row, Form, Input, Checkbox, Radio } from "antd";

import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

export const ChanelPage = () => {
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
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Name"
                  name="name"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="Ch. Address"
                  name="address"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="Unit"
                  name="unit"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="Serial #"
                  name="serial"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="Low Range"
                  name="lowRange"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="High Range"
                  name="highRange"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="Threshold %"
                  name="threshold"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="24Hr Threshold%"
                  name="Threshold hour"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="Pollutant Type"
                  name="pollutant"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="View Format"
                  name="viewFormat"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="State"
                  name="state"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="Average"
                  name="average"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Analyzer"
                  name="analyzer"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="Chanel"
                  name="chanel"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  name="EU"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Checkbox>EU Conversion</Checkbox>
                </Form.Item>

                <Form.Item
                  label="Low Volt / Current"
                  name="lowVolt"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="High Volt / Current"
                  name="highVolt"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>
                <br />

                <p style={{ marginBottom: 0 }}>Linear Correction</p>
                <p style={{ marginBottom: 0 }}>A B</p>

                <Form.Item
                  name="A"
                  style={{
                    width: "calc(20%)",
                    marginBottom: 3,
                    display: "inline-block",
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  name="B"
                  style={{
                    width: "calc(70%)",
                    display: "inline-block",
                    marginBottom: 3,
                    marginLeft: 5,
                    marginTop: 5,
                  }}
                >
                  <Input
                    style={{ height: 25, width: 50 }}
                    value="x+"
                    disabled
                  />

                  <Input style={{ height: 25, width: 190, marginLeft: 3 }} />
                </Form.Item>

                <Form.Item
                  name="Web"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Checkbox checked>Web Display</Checkbox>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="Range"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Checkbox checked>Range Deviation</Checkbox>
                </Form.Item>
                <Radio.Group onChange={null} value={1} disabled>
                  <Radio value={1}>By Percentage</Radio>
                  <Radio value={2}>By Value</Radio>
                </Radio.Group>

                <Form.Item
                  label="Low"
                  name="low"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="High"
                  name="high"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  name="ofRange"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Checkbox>Change as Percent of Range</Checkbox>
                </Form.Item>

                <Form.Item
                  label="Percentage"
                  name="percentage"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  name="Unipolar"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Checkbox>Unipolar (Set Negative Value to 0)</Checkbox>
                </Form.Item>

                <Form.Item
                  name="Constant"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Checkbox>Constant</Checkbox>
                </Form.Item>

                <Radio.Group onChange={null} value={2} disabled>
                  <Radio value={1}>By Percentage</Radio>
                  <Radio value={2}>By Value</Radio>
                </Radio.Group>

                <Form.Item
                  label="# of Samples"
                  name="samples"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Form.Item
                  label="Value"
                  name="value"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ height: 25 }} />
                </Form.Item>

                <Radio.Group onChange={null} value={1} disabled>
                  <Radio value={1}>By Timebase</Radio>
                  <Radio value={2}>By Instant</Radio>
                </Radio.Group>
              </Col>
            </Row>
            <Divider orientation="left">Row Bottom</Divider>
            <Row>
              <Col span={12}>Column1</Col>
              <Col span={12}>Column2</Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
