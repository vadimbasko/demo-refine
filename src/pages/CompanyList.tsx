import React from "react";
import {IResourceComponentsProps, MetaDataQuery} from "@pankod/refine-core";
import {ICompany} from "../interfaces/interfaces";
import {
  CreateButton, DeleteButton, EditButton,
  getDefaultSortOrder, List, ShowButton, Space,
  Table,
  useTable
} from "@pankod/refine-antd";

export const CompanyList: React.FC<IResourceComponentsProps> = () => {

  const metaData: MetaDataQuery = {
    fields: [
      "id",
      "name"
    ],
  };

  const {tableProps, sorter} = useTable<ICompany>({
    metaData,
    initialSorter: [
      {
        field: "id",
        order: "asc",
      },
    ],
  });

  return (
    <List pageHeaderProps={{ extra: <CreateButton /> }}>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title="ID"
          sorter={{multiple: 2}}
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
        />
        <Table.Column
          key="name"
          dataIndex="name"
          title="Name"
          sorter={{multiple: 1}}
        />
        <Table.Column<ICompany>
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
