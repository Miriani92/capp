import React, { useState, useEffect } from "react";
import { Button, Select, Form, Input } from "antd";
import { useStore } from "../store/useUsersStore";
import { FormProps } from "./Modal";

export const UserForm: React.FC<FormProps> = ({
  id,
  name,
  email,
  gender,
  city,
  phone,
  street,
  handleSubmit,
}) => {
  const { addUser } = useStore((state: any) => state);
  const [formData, setFormData] = useState({
    id: id || new Date().getTime(),
    name: name || "",
    email: email || "",
    gender: gender || "",
    address: {
      street: street || "",
      city: city || "",
    },
    phone: phone || "",
  });
  const onSubmit = async () => {
    setFormData({ ...formData });
    if (handleSubmit) {
      handleSubmit(formData);
    } else {
      addUser(formData);
    }

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
  useEffect(() => {
    setFormData({
      id: id || new Date().getTime(),
      name: name || "",
      email: email || "",
      gender: gender || "",
      address: {
        street: street || "",
        city: city || "",
      },
      phone: phone || "",
    });
  }, [name]);
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
        rules={[
          { required: name ? false : true, message: "Please input your Name!" },
        ]}
      >
        <Input
          value={handleSubmit ? formData.name : name}
          defaultValue={name || ""}
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
        rules={[
          {
            required: email ? false : true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          value={handleSubmit ? formData.email : email}
          defaultValue={email || ""}
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
        rules={[
          {
            required: street ? false : true,
            message: "Please input your Street!",
          },
        ]}
      >
        <Input
          value={handleSubmit ? formData.address.street : street}
          defaultValue={street || ""}
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
        rules={[
          { required: city ? false : true, message: "Please input your City!" },
        ]}
      >
        <Input
          value={handleSubmit ? formData.address.city : city}
          defaultValue={city || ""}
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
        rules={[
          {
            required: phone ? false : true,
            message: "Please input your Phone Number!",
          },
        ]}
      >
        <Input
          value={handleSubmit ? formData.phone : phone}
          defaultValue={phone || ""}
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
          defaultActiveFirstOption
          value={handleSubmit ? formData.gender : gender}
          defaultValue={"Female"}
          onChange={(value) =>
            setFormData((state: any) => {
              return {
                ...state,
                gender: value,
              };
            })
          }
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
