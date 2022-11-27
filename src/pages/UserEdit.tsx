import React from "react";
import {
  Checkbox,
  Edit,
  Form,
  Input,
  useForm,
} from "@pankod/refine-antd";
import {IUser} from "../interfaces/interfaces";
import {IResourceComponentsProps} from "@pankod/refine-core";

export const UserEdit: React.FC<IResourceComponentsProps> = () => {
  const {formProps, saveButtonProps} = useForm<IUser>({
    metaData: {
      fields: [
        "id",
        "email",
        "firstName",
        "lastName",
        "banned",
        {company: ["id", "name"]},

        "registrationDate",
        {role: ["id", "name"]},
        "userSource",
      ]
    }
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="First Name"
          name="firstName"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="lastName"
          name="lastName"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="banned"
          name="banned"
          valuePropName="checked"
        >
          <Checkbox/>
        </Form.Item>

        <Form.Item
          label="registrationDate"
          name="registrationDate"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="userSource"
          name="userSource"
        >
          <Input/>
        </Form.Item>
      </Form>
    </Edit>
  );
};
