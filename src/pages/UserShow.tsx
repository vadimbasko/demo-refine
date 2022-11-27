import React from "react";
import {IResourceComponentsProps, useNavigation, useShow} from "@pankod/refine-core";
import {EditButton, RefreshButton, Show, Typography} from "@pankod/refine-antd";
import {IUser} from "../interfaces/interfaces";
const { Title, Text } = Typography;

export const UserShow: React.FC<IResourceComponentsProps> = () => {

  const { queryResult } = useShow<IUser>({
    metaData: {
      fields: [
        "id",
        "firstName",
        "lastName",
        "email",
      ],
    }
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { push } = useNavigation();

  return (<Show
    isLoading={isLoading}
    pageHeaderProps={{
      title: record?.lastName,
      subTitle: record?.email,
      extra: (
        <>
          <EditButton
            onClick={() =>
              push(`/users/edit/${record?.id}`)
            }
          />
          <RefreshButton />
        </>
      ),
    }}
  >

    <Title level={5}>First Name</Title>
    <Text>{record?.firstName}</Text>

    <Title level={5}>Last Name</Title>
    <Text>{record?.lastName}</Text>

    <Title level={5}>Email</Title>
    <Text>{record?.email}</Text>

  </Show>);

}
