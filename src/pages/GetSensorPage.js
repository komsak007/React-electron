import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Col,
  Divider,
  Layout,
  Row,
  Form,
  Input,
  Checkbox,
  Radio,
  Button,
  Spin,
} from "antd";
import axios from "axios";

import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

export const GetSensorPage = () => {
  const { Content } = Layout;
  const param = useParams();
  const history = useHistory();
  const [form] = Form.useForm();

  const user = JSON.parse(localStorage.getItem("user"));

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    sensor_name: "",
    chanel_address: "",
    unit: "",
    serial: "",
    low_range: "",
    high_range: "",
    threshold: "",
    hr_thresh: "",
    pollutant_type: "",
    view_format: "",
    state: "",
    average: "",
  });

  useEffect(() => {
    loadData();
  }, [param.site_name, param.sensor_name]);

  const loadData = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    await axios
      .get(
        `http://localhost:8000/api/${param.site_name}/sensor/${param.sensor_name}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setData(data);
        setLoading(false);
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
    axios
      .put(
        `http://localhost:8000/api/${param.site_name}/sensor/edit/${param.sensor_name}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        setData({});
        toast.success(result.data.msg, {
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
          {loading ? (
            <Spin size="large" tip="Loading..." />
          ) : (
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <h4>
                Sensor "{param.sensor_name}" in {param.site_name} site
              </h4>
              <Row>
                <Col span={8}>
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
                        label="Sensor Name"
                        name="sensor_name"
                        style={{
                          width: "calc(80%)",
                          marginBottom: 3,
                          marginTop: 5,
                        }}
                      >
                        <Input
                          style={{ height: 25 }}
                          placeholder="Sensor Name"
                          onChange={handleChange("sensor_name")}
                          style={{
                            color: "red",
                          }}
                          disabled
                        />
                      </Form.Item>

                      <Form.Item
                        label="Ch. Address"
                        name="chanel_address"
                        style={{
                          width: "calc(80%)",
                          marginBottom: 3,
                          marginTop: 5,
                        }}
                      >
                        <Input
                          style={{ height: 25 }}
                          placeholder="Ch. Address"
                          onChange={handleChange("chanel_address")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Unit"
                          onChange={handleChange("unit")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Serial #"
                          onChange={handleChange("serial")}
                        />
                      </Form.Item>

                      <Form.Item
                        label="Low Range"
                        name="low_range"
                        style={{
                          width: "calc(80%)",
                          marginBottom: 3,
                          marginTop: 5,
                        }}
                      >
                        <Input
                          style={{ height: 25 }}
                          placeholder="Low Range"
                          onChange={handleChange("low_range")}
                        />
                      </Form.Item>

                      <Form.Item
                        label="High Range"
                        name="high_range"
                        style={{
                          width: "calc(80%)",
                          marginBottom: 3,
                          marginTop: 5,
                        }}
                      >
                        <Input
                          style={{ height: 25 }}
                          placeholder="High Range"
                          onChange={handleChange("high_range")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Threshold %"
                          onChange={handleChange("threshold")}
                        />
                      </Form.Item>

                      <Form.Item
                        label="24Hr Threshold%"
                        name="hr_thresh"
                        style={{
                          width: "calc(80%)",
                          marginBottom: 3,
                          marginTop: 5,
                        }}
                      >
                        <Input
                          style={{ height: 25 }}
                          placeholder="24Hr Threshold%"
                          onChange={handleChange("hr_thresh")}
                        />
                      </Form.Item>

                      <Form.Item
                        label="Pollutant Type"
                        name="pollutant_type"
                        style={{
                          width: "calc(80%)",
                          marginBottom: 3,
                          marginTop: 5,
                        }}
                      >
                        <Input
                          style={{ height: 25 }}
                          placeholder="Pollutant Type"
                          onChange={handleChange("pollutant_type")}
                        />
                      </Form.Item>

                      <Form.Item
                        label="View Format"
                        name="view_format"
                        style={{
                          width: "calc(80%)",
                          marginBottom: 3,
                          marginTop: 5,
                        }}
                      >
                        <Input
                          style={{ height: 25 }}
                          placeholder="View Format"
                          onChange={handleChange("view_format")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="State"
                          onChange={handleChange("state")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Average"
                          onChange={handleChange("average")}
                        />
                      </Form.Item>
                    </Form.Item>
                  </Form>
                </Col>
                <Col span={8}>
                  <Form>
                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        label="Analyzer"
                        name="analyzer"
                        style={{
                          width: "calc(80%)",
                          marginBottom: 3,
                          marginTop: 5,
                        }}
                      >
                        <Input
                          style={{ height: 25 }}
                          placeholder="Ch. Address"
                          onChange={handleChange("chanel_address")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Ch. Address"
                          onChange={handleChange("chanel_address")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Ch. Address"
                          onChange={handleChange("chanel_address")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Ch. Address"
                          onChange={handleChange("chanel_address")}
                        />
                      </Form.Item>
                      <br />

                      <p style={{ marginBottom: 0 }}>Linear Correction</p>
                      <p style={{ marginBottom: 0 }}>
                        A
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;B
                      </p>

                      <Form.Item
                        name="A"
                        style={{
                          width: "calc(20%)",
                          marginBottom: 3,
                          display: "inline-block",
                          marginTop: 5,
                        }}
                      >
                        <Input
                          style={{ height: 25 }}
                          placeholder="Ch. Address"
                          onChange={handleChange("chanel_address")}
                        />
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

                        <Input
                          style={{ height: 25, width: 190, marginLeft: 3 }}
                        />
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
                    </Form.Item>
                  </Form>
                </Col>
                <Col span={8}>
                  <Form>
                    <Form.Item style={{ marginBottom: 0 }}>
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Ch. Address"
                          onChange={handleChange("chanel_address")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Ch. Address"
                          onChange={handleChange("chanel_address")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Ch. Address"
                          onChange={handleChange("chanel_address")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Ch. Address"
                          onChange={handleChange("chanel_address")}
                        />
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
                        <Input
                          style={{ height: 25 }}
                          placeholder="Ch. Address"
                          onChange={handleChange("chanel_address")}
                        />
                      </Form.Item>

                      <Radio.Group onChange={null} value={1} disabled>
                        <Radio value={1}>By Timebase</Radio>
                        <Radio value={2}>By Instant</Radio>
                      </Radio.Group>
                      <Form.Item
                        label=""
                        style={{
                          display: "inline-block",
                          marginLeft: "8px",
                          marginTop: "80px",
                        }}
                      >
                        {user.role === "user" ? (
                          ""
                        ) : (
                          <Button
                            type="primary"
                            style={{ borderRadius: 5 }}
                            onClick={handleSubmit}
                          >
                            Update Sensor
                          </Button>
                        )}
                      </Form.Item>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
              <Divider orientation="left">Row Bottom</Divider>
              <Row>
                <Col span={12}>Column1</Col>
                <Col span={12}>Column2</Col>
              </Row>
            </Content>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
};
