import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";

import "@pankod/refine-antd/dist/styles.min.css";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider, { GraphQLClient } from "@pankod/refine-graphql";
import { useTranslation } from "react-i18next";
import { Header } from "components/layout";
import { authProvider } from "./authProvider";
import {Login} from "./pages/Login";
const API_URL = "https://your-graphql-url/graphql";

const client = new GraphQLClient(API_URL);
const gqlDataProvider = dataProvider(client);

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  function Users() {
    return <></>;
  }

  return (
    <Refine
      notificationProvider={notificationProvider}
      Layout={Layout}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      routerProvider={routerProvider}
      dataProvider={gqlDataProvider}
      authProvider={authProvider}
      LoginPage={Login}
      i18nProvider={i18nProvider}
      Header={Header}
      resources={[
        {
          name: "users",
          list: Users,
          options: {
            route: "users",
          },
        },
      ]}
    />
  );
}

export default App;
