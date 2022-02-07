import { Row, Col } from "antd";
import React, { useState } from "react";
import demo from "./demo.json";

const d = "dawda";
function App() {
  const [value, setValue] = useState(demo);
  const onChange = (v) => {
    // console.log(JSON.stringify(v))
    setValue(v);
  };

  const onUploadImage = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const url = reader.result;
      callback(url);
    });

    reader.readAsDataURL(file);
  };

  return (
    <Row>
      <Col span={12} offset={6}>
        测试
      </Col>
    </Row>
  );
}

export default App;
