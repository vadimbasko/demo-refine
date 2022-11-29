import React from "react";
import {IResourceComponentsProps, MetaDataQuery} from "@pankod/refine-core";
import {IUser} from "../interfaces/interfaces";
import {
  CreateButton, DeleteButton, EditButton,
  List, ShowButton, Space,
  Table,
  useTable
} from "@pankod/refine-antd";

export const UserList: React.FC<IResourceComponentsProps> = () => {

  const metaData: MetaDataQuery = {
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
    ],
  };

  const {tableProps, sorter} = useTable<IUser>({
    metaData,
    initialSorter: [
      {
        field: "email",
        order: "asc",
      },
    ],
  });

  return (
    <List pageHeaderProps={{ extra: <CreateButton /> }}>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          key="email"
          dataIndex="email"
          title="Email"
          sorter={{multiple: 2}}
        />
        <Table.Column
          key="firstName"
          dataIndex="firstName"
          title="First Name"
        />
        <Table.Column
          key="lastName"
          dataIndex="lastName"
          title="Last Name"
        />
        <Table.Column
          key="banned"
          dataIndex="banned"
          title="Banned"
          render={value => String(value)}
        />
        <Table.Column
          key="registrationDate"
          dataIndex="registrationDate"
          title="Registration Date"
        />
        <Table.Column
          key="userSource"
          dataIndex="userSource"
          title="User Source"
        />
        <Table.Column
          key="company"
          title="Company Name"
          render={item => item?.company?.name}
        />
        <Table.Column
          key="role"
          title="Role Name"
          render={item => item?.role?.name}
        />
        <Table.Column<IUser>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton
                hideText
                size="small"
                recordItemId={record.id}
              />
              <ShowButton
                hideText
                size="small"
                recordItemId={record.id}
              />
              <DeleteButton
                hideText
                size="small"
                recordItemId={record.id}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  )

}
