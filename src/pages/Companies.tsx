import React from "react";
import {IResourceComponentsProps, MetaDataQuery} from "@pankod/refine-core";
import {ICompany} from "../interfaces/interfaces";
import {Table, useTable} from "@pankod/refine-antd";

export const Companies: React.FC<IResourceComponentsProps> = () => {

  const metaData: MetaDataQuery = {
    operation: "companyListRefine",
    fields: [
      "id",
      "name"
    ],
    variables: [],
  };

  const { tableProps } = useTable<ICompany>({
    metaData
  });

  return (
    <Table {...tableProps} rowKey="id">
      <Table.Column
        dataIndex="id"
        title="ID"
      />
      <Table.Column
        key="name"
        dataIndex="name"
        title="Name"
      />
    </Table>
  )

}
