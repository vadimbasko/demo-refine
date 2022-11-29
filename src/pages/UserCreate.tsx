import React from "react";
import {
  Checkbox,
  Create,
  Form,
  Input,
  useForm, useSelect, Select
} from "@pankod/refine-antd";
import {ICompany, IRole, IUser} from "../interfaces/interfaces";
import {IResourceComponentsProps} from "@pankod/refine-core";

export const UserCreate: React.FC<IResourceComponentsProps> = () => {
  const {formProps, saveButtonProps} = useForm<IUser>();

  const companySelectRes= useSelect<ICompany>({
    optionLabel: "name",
    resource: "companies",
    metaData: {
      fields: [
        "id",
        "name"
      ],
    }
  });

  const roleSelectRes = useSelect<IRole>({
    optionLabel: "name",
    resource: "roles",
    metaData: {
      fields: [
        "id",
        "name"
      ],
    }
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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

        <Form.Item
          label="Company"
          name="companyId"
        >
          <Select {... companySelectRes.selectProps} />
        </Form.Item>

        <Form.Item
          label="Role"
          name="roleId"
        >
          <Select {... roleSelectRes.selectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
