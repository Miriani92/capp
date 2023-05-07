import React, { useState } from "react";
import { Button, Select, Form, Input } from "antd";

export const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    phone: null,
  });

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="Name"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Street"
        name="Street"
        rules={[{ required: true, message: "Please input your Street!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="City"
        name="City"
        rules={[{ required: true, message: "Please input your City!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="Phone"
        rules={[{ required: true, message: "Please input your Phone Number!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Gender"
        name="Gender"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Select />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

// {
//     "id": 19,
//     "name": "Adriana Diaz",
//     "email": "adrianadiaz@gology.com",
//     "gender": "female",
//     "address": { "street": "Lawton Street", "city": "San Diego" },
//     "phone": "+1 (806) 473-2162"
//   },
