import React from "react";
import {CrudFilters, HttpError, IResourceComponentsProps, MetaDataQuery} from "@pankod/refine-core";
import {ICompany, IUser, IPostFilterVariables} from "../interfaces/interfaces";
import {
  Button, Card, Col,
  CreateButton, DatePicker, DeleteButton, EditButton, Form, FormProps,
  List, Row, Select, ShowButton, Space,
  Table, useSelect,
  useTable
} from "@pankod/refine-antd";

const {RangePicker} = DatePicker;

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

  const {tableProps, searchFormProps} = useTable<IUser,
    HttpError,
    IPostFilterVariables>({
    initialPageSize: 20,
    metaData,
    initialSorter: [
      {
        field: "email",
        order: "asc",
      },
      {
        field: "company",
        order: "asc",
      },
    ],
    onSearch: (params) => {
      const filters: CrudFilters = [];
      const { company, userSource, registrationDate } = params;

      filters.push(
        {
          field: "company.id",
          operator: "eq",
          value: company,
        },
        {
          field: "userSource",
          operator: "eq",
          value: userSource,
        },
        {
          field: "registrationDate",
          operator: "gte",
          value: registrationDate ? registrationDate[0].toISOString() : undefined,
        },
        {
          field: "registrationDate",
          operator: "lte",
          value: registrationDate ? registrationDate[1].toISOString() : undefined,
        },
      );

      return filters;
    },
  });

  return (
    <Row gutter={[16, 16]}>
      <Col lg={6} xs={24}>
        <Card title="Filters">
          <Filter formProps={searchFormProps}/>
        </Card>
      </Col>
      <Col lg={18} xs={24}>
        <List pageHeaderProps={{extra: <CreateButton/>}}>
          <Table {...tableProps} rowKey="id">
            <Table.Column
              key="email"
              dataIndex="email"
              title="Email"
              sorter={{multiple: 1}}
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
              sorter={{multiple: 2}}
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
      </Col>
    </Row>
  )

}

const Filter: React.FC<{ formProps: FormProps }> = ({formProps}) => {
  const {selectProps: companySelectProps} = useSelect<ICompany>({
    optionLabel: "name",
    metaData: {
      fields: [
        "id", "name"
      ]
    },
    resource: "companies",
  });

  return (
    <Form layout="vertical" {...formProps}>
      <Form.Item label="User Source" name="userSource">
        <Select
          allowClear
          options={[
            {
              label: "WEB",
              value: "WEB",
            },
            {
              label: "OFFLINE",
              value: "OFFLINE",
            },
            {
              label: "MOBILE",
              value: "MOBILE",
            },
          ]}
          placeholder="User Source"
        />
      </Form.Item>
      <Form.Item label="Company" name="company">
        <Select
          {...companySelectProps}
          allowClear
          placeholder="Search Companies"
        />
      </Form.Item>
      <Form.Item label="Registration Date" name="registrationDate">
        <RangePicker/>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Filter
        </Button>
      </Form.Item>
    </Form>
  );
};
