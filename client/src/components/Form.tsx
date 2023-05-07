import React, { useState } from "react";
import { Button, Select, Form, Input } from "antd";
import { useStore } from "../store/useUsersStore";
import staticMethods from "antd/es/message";

export const UserForm: React.FC = () => {
  const { addUser } = useStore((state: any) => state);
  const [formData, setFormData] = useState({
    id: new Date().getTime(),
    name: "",
    email: "",
    gender: "",
    address: {
      street: "",
      city: "",
    },
    phone: "",
  });

  const onSubmit = async () => {
    setFormData({ ...formData });
    addUser(formData);
    setFormData({
      id: 0,
      name: "",
      email: "",
      gender: "",
      address: {
        street: "",
        city: "",
      },
      phone: "",
    });
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
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="Name"
        valuePropName={formData.name}
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input
          onChange={(e) =>
            setFormData((state: any) => {
              const { value } = e.target;
              return {
                ...state,
                name: value,
              };
            })
          }
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        valuePropName={formData.email}
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          onChange={(e) =>
            setFormData((state: any) => {
              const { value } = e.target;
              return {
                ...state,
                email: value,
              };
            })
          }
        />
      </Form.Item>
      <Form.Item
        label="Street"
        name="Street"
        valuePropName={formData.address.street}
        rules={[{ required: true, message: "Please input your Street!" }]}
      >
        <Input
          onChange={(e) =>
            setFormData((state: any) => {
              const { value } = e.target;
              return {
                ...state,
                address: {
                  ...state.address,
                  street: value,
                },
              };
            })
          }
        />
      </Form.Item>
      <Form.Item
        label="City"
        name="City"
        valuePropName={formData.address.city}
        rules={[{ required: true, message: "Please input your City!" }]}
      >
        <Input
          onChange={(e) =>
            setFormData((state: any) => {
              const { value } = e.target;
              return {
                ...state,
                address: {
                  ...state.address,
                  city: value,
                },
              };
            })
          }
        />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="Phone"
        valuePropName={formData.phone}
        rules={[{ required: true, message: "Please input your Phone Number!" }]}
      >
        <Input
          onChange={(e) =>
            setFormData((state: any) => {
              const { value } = e.target;
              return {
                ...state,
                phone: value,
              };
            })
          }
        />
      </Form.Item>
      <Form.Item
        label="Gender"
        name="Gender"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Select
          onChange={(value) =>
            setFormData((state: any) => {
              return {
                ...state,
                gender: value,
              };
            })
          }
          defaultValue={{ value: "Female", label: "Female" }}
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
        />
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
