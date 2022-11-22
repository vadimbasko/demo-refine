import React from "react";
import {IResourceComponentsProps, MetaDataQuery, useCustom} from "@pankod/refine-core";
import {ICompany} from "../interfaces/interfaces";

export const Companies: React.FC<IResourceComponentsProps> = () => {

  const metaData: MetaDataQuery = {
    operation: "companyList",
    fields: [
      "name"
    ],
  };

  const { data } = useCustom<Array<ICompany>>({
    url: '',
    method: 'get',
    metaData
  });

  return <> {
    data?.data?.map(company => <>{company.name}<br/></>)
  } </>;
}
