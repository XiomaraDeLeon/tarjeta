import "./App.css";
import { Input, Form, Button, Col, Row } from "antd";
import React from "react";
import "antd/dist/antd.css";

function App() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // if (values) {
    var luhn = require("luhn");
    var is_valid = luhn.validate("4111111111111111");
    console.log(is_valid);
    // }
  };

  // const onChange = (value) => {
  //   console.log("changed", value);
  // };

  return (
    <Form onFinish={onFinish} form={form}>
      <Row>
        <Col>
          <Form.Item
            label="No. de Tarjeta"
            name="number"
            rules={[
              {
                required: true,
                message: "Agregue un numero",
              },
            ]}
          >
            <Input style={{ width: "200px", marginRight: "15px" }} />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              buscar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default App;
