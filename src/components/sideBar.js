import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Tree } from "antd";
import {
  ApartmentOutlined,
  ApiOutlined,
  PlusCircleOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import axios from "axios";

import "antd/dist/antd.css";

const SideBar = () => {
  const { Sider } = Layout;
  const history = useHistory();
  const TreeNode = Tree.TreeNode;
  var token = localStorage.getItem("token");

  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios.get("http://localhost:8000/api/site").then((result) => {
      // console.log(result.data);
      setData(result.data);
    });
  };

  const handleSelect = (e) => {
    const selects = e[0];
    const select = selects ? selects.split(" ") : "";
    const length = select.length;
    var path = localStorage.getItem("path");

    // Site
    if (length === 1 && path !== select[0]) {
      localStorage.setItem("path", select[0]);
      history.push(`/site/${select[0]}`);
    }
    // Sensor create
    else if (length === 2 && selects !== "create site" && select[1] === "add") {
      history.push(`/${select[0]}/add`);
    }
    // Sensor Get
    else if (length === 2 && selects !== "create site") {
      history.push(`/${select[0]}/sensor/${select[1]}`);
    }
    // Create site
    else if (selects === "create site") {
      localStorage.setItem("path", null);
      history.push("/site/create");
    }
    //home
    else {
      history.push("/");
    }
  };

  return (
    <>
      <Sider
        width={200}
        className="site-layout-background"
        style={{ backgroundColor: "#fff" }}
      >
        <Tree
          // multiple
          // showLine
          disabled={token ? false : true}
          showIcon
          onSelect={handleSelect}
          style={{ display: token ? "" : "none" }}
          // onExpand={(e) => console.log(e)}
        >
          <TreeNode
            title={"Create Site"}
            key={"create site"}
            icon={<PlusSquareOutlined />}
          />
          {data.map((text, index, array) => (
            <TreeNode
              title={text.site_name}
              key={text.site_name}
              icon={<ApartmentOutlined />}
            >
              {array[index].sensor.map((sen) => (
                <TreeNode
                  title={sen}
                  key={`${text.site_name} ${sen}`}
                  icon={<ApiOutlined />}
                />
              ))}
              <TreeNode
                title={"Add Sensor"}
                key={`${text.site_name} add`}
                icon={<PlusCircleOutlined />}
              />
            </TreeNode>
          ))}

          {/* <TreeNode title="trang" key="trang">
            <TreeNode title="talang" key="talang" />
            <TreeNode title="chon" key="chon" />
          </TreeNode> */}
        </Tree>
      </Sider>
    </>
  );
};
export default SideBar;
