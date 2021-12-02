import React from "react";
import { Layout, Form, Input, Divider, Col, Row, Checkbox, Select } from "antd";

import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";
import "antd/dist/antd.css";

export const CalibratePage = () => {
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
              <Col span={12}>
                <Divider orientation="left">Initial Calibration</Divider>
                <Form.Item
                  name="Calibration"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Checkbox>Enable Calibration Correction</Checkbox>
                </Form.Item>
                <Form.Item
                  name="Offset"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Checkbox>Zero Offset</Checkbox>
                  <Input style={{ width: "calc(50%)", height: 25 }} />
                </Form.Item>

                <Form.Item
                  name="Factor"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Checkbox>Factor</Checkbox>
                  <Input style={{ width: "calc(50%)", height: 25 }} />
                </Form.Item>
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
              <Col span={11}>
                <Divider orientation="left">Validation Limits</Divider>
                <Form.Item
                  name="spanDiff"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="spanDiff"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="tom">Tom</Select.Option>
                  </Select>
                  <Input style={{ width: 50, height: 30, marginLeft: 15 }} />
                </Form.Item>
                <Form.Item
                  name="Offset"
                  label="Zero Drift(% Of Range)"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ width: 50, height: 30 }} />
                </Form.Item>

                <Form.Item
                  name="Factor Low"
                  label="Factor Low"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ width: 50, height: 30 }} />
                </Form.Item>

                <Form.Item
                  name="factor high"
                  label="Factor High"
                  style={{
                    width: "calc(80%)",
                    marginBottom: 3,
                    marginTop: 5,
                  }}
                >
                  <Input style={{ width: 50, height: 30 }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Divider orientation="left">Calibration Fail Action</Divider>
              <Form.Item
                name="ToOutCallf"
                style={{
                  width: "calc(80%)",
                  marginBottom: 3,
                  marginTop: 5,
                }}
              >
                <Checkbox>
                  Set Monitor Status ToOutCallf Outside a Validation Limit
                </Checkbox>
              </Form.Item>

              <Form.Item
                name="To_Ok"
                style={{
                  width: "calc(80%)",
                  marginBottom: 3,
                  marginTop: 5,
                }}
              >
                <Checkbox>
                  Set Monitor Status ToOK_CalibFail And OutCal If Outside 2 X
                  the Validation Limit (Must Enable OK_XXX Status Under Options)
                </Checkbox>
              </Form.Item>

              <Form.Item
                label="Digital Output"
                name="Digital"
                style={{
                  width: "calc(80%)",
                  marginBottom: 3,
                  marginTop: 5,
                }}
              >
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="None"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="lucy">Lucy</Select.Option>
                  <Select.Option value="tom">Tom</Select.Option>
                </Select>
              </Form.Item>

              <Divider orientation="left">Use EPA Part 60/75 OOC Rules</Divider>

              <Form.Item
                name="set_Chanel"
                style={{
                  width: "calc(80%)",
                  marginBottom: 3,
                  marginTop: 5,
                }}
              >
                <Checkbox>
                  Set Chanel Status to OOC (Out of Control) After the Zero or
                  Span Limit is Exceeded for this number of consecutive
                  calibrations
                </Checkbox>
                <Input style={{ width: 50, textAlign: "center" }} />
              </Form.Item>

              <Form.Item
                name="set_Chanel_last"
                style={{
                  width: "calc(80%)",
                  marginBottom: 3,
                  marginTop: 5,
                }}
              >
                <Checkbox>
                  Set Chanel Status to OOC if this number of hours has elapsed
                  since the last calibration
                </Checkbox>
                <Input style={{ width: 50, textAlign: "center" }} />
              </Form.Item>

              <Divider orientation="left">Add Calibration</Divider>

              <Form.Item
                label="Select Sequence"
                name="Sequence"
                style={{
                  width: "calc(80%)",
                  marginBottom: 3,
                  marginTop: 5,
                }}
              >
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="None"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Select.Option value="jack">AutoCal_Co_So2</Select.Option>
                  <Select.Option value="lucy">AutoCal_Co_So3</Select.Option>
                  <Select.Option value="tom">AutoCal_Co_So4</Select.Option>
                </Select>
              </Form.Item>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
