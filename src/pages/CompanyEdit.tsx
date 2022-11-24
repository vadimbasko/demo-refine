import React from "react";
import {
  Edit,
  Form,
  Input,
  useForm,
} from "@pankod/refine-antd";
import {ICompany} from "../interfaces/interfaces";
import {IResourceComponentsProps, MetaDataQuery} from "@pankod/refine-core";

export const CompanyEdit: React.FC<IResourceComponentsProps> = () => {

  const metaData: MetaDataQuery = {
    fields: [
      "id",
      "name"
    ],
  };

  const { formProps, saveButtonProps } = useForm<ICompany>({
    metaData
  });

  return (
    <Edit
      saveButtonProps={saveButtonProps}
      pageHeaderProps={{ extra: null }}
    >
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
    </Edit>
  );
};
