import { Button, Checkbox, Form, Input } from "antd";
import "../styles/register.css";
import { useState } from "react";
import AuthService from "../services/auth.service";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formInvalid, setFormInvalid] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleOk = () => {
    for (const value in form) {
      if (!form[value]) {
        setFormInvalid(true);
      }
    }
    if (!formInvalid) {
      AuthService.register(form);
    } else {
      console.log("faltan campos");
    }
  };

  const handleInput = (event) => {
    const value = event.target.value;
    const target = event.target.name;

    setForm({
      ...form,
      [target]: value,
    });
    console.log("estoy tomando el valor");
  };

  return (
    <div className="register">
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="Name"
          initialValue={form.name}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input name="name" onChange={handleInput} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          initialValue={form.email}
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input name="email" onChange={handleInput} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          initialValue={form.password}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password name="password" onChange={handleInput} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={() => handleOk()}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
