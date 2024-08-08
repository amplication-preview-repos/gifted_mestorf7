import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectsList } from "./projects/ProjectsList";
import { ProjectsCreate } from "./projects/ProjectsCreate";
import { ProjectsEdit } from "./projects/ProjectsEdit";
import { ProjectsShow } from "./projects/ProjectsShow";
import { QrCodesList } from "./qrCodes/QrCodesList";
import { QrCodesCreate } from "./qrCodes/QrCodesCreate";
import { QrCodesEdit } from "./qrCodes/QrCodesEdit";
import { QrCodesShow } from "./qrCodes/QrCodesShow";
import { SubscriptionPlansList } from "./subscriptionPlans/SubscriptionPlansList";
import { SubscriptionPlansCreate } from "./subscriptionPlans/SubscriptionPlansCreate";
import { SubscriptionPlansEdit } from "./subscriptionPlans/SubscriptionPlansEdit";
import { SubscriptionPlansShow } from "./subscriptionPlans/SubscriptionPlansShow";
import { InvitationsList } from "./invitations/InvitationsList";
import { InvitationsCreate } from "./invitations/InvitationsCreate";
import { InvitationsEdit } from "./invitations/InvitationsEdit";
import { InvitationsShow } from "./invitations/InvitationsShow";
import { LinksList } from "./links/LinksList";
import { LinksCreate } from "./links/LinksCreate";
import { LinksEdit } from "./links/LinksEdit";
import { LinksShow } from "./links/LinksShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LinkShortener"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Projects"
          list={ProjectsList}
          edit={ProjectsEdit}
          create={ProjectsCreate}
          show={ProjectsShow}
        />
        <Resource
          name="QrCodes"
          list={QrCodesList}
          edit={QrCodesEdit}
          create={QrCodesCreate}
          show={QrCodesShow}
        />
        <Resource
          name="SubscriptionPlans"
          list={SubscriptionPlansList}
          edit={SubscriptionPlansEdit}
          create={SubscriptionPlansCreate}
          show={SubscriptionPlansShow}
        />
        <Resource
          name="Invitations"
          list={InvitationsList}
          edit={InvitationsEdit}
          create={InvitationsCreate}
          show={InvitationsShow}
        />
        <Resource
          name="Links"
          list={LinksList}
          edit={LinksEdit}
          create={LinksCreate}
          show={LinksShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
