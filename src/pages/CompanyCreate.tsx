import React from "react";
import {
  Create,
  Form,
  Input,
  useForm,
} from "@pankod/refine-antd";
import {ICompany} from "../interfaces/interfaces";
import {IResourceComponentsProps} from "@pankod/refine-core";

export const CompanyCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICompany>();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
