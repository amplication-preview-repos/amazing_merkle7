import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DeliveryList } from "./delivery/DeliveryList";
import { DeliveryCreate } from "./delivery/DeliveryCreate";
import { DeliveryEdit } from "./delivery/DeliveryEdit";
import { DeliveryShow } from "./delivery/DeliveryShow";
import { CrateTypeList } from "./crateType/CrateTypeList";
import { CrateTypeCreate } from "./crateType/CrateTypeCreate";
import { CrateTypeEdit } from "./crateType/CrateTypeEdit";
import { CrateTypeShow } from "./crateType/CrateTypeShow";
import { DeliveryRunList } from "./deliveryRun/DeliveryRunList";
import { DeliveryRunCreate } from "./deliveryRun/DeliveryRunCreate";
import { DeliveryRunEdit } from "./deliveryRun/DeliveryRunEdit";
import { DeliveryRunShow } from "./deliveryRun/DeliveryRunShow";
import { CultivarList } from "./cultivar/CultivarList";
import { CultivarCreate } from "./cultivar/CultivarCreate";
import { CultivarEdit } from "./cultivar/CultivarEdit";
import { CultivarShow } from "./cultivar/CultivarShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { CommodityList } from "./commodity/CommodityList";
import { CommodityCreate } from "./commodity/CommodityCreate";
import { CommodityEdit } from "./commodity/CommodityEdit";
import { CommodityShow } from "./commodity/CommodityShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"FarmManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Delivery"
          list={DeliveryList}
          edit={DeliveryEdit}
          create={DeliveryCreate}
          show={DeliveryShow}
        />
        <Resource
          name="CrateType"
          list={CrateTypeList}
          edit={CrateTypeEdit}
          create={CrateTypeCreate}
          show={CrateTypeShow}
        />
        <Resource
          name="DeliveryRun"
          list={DeliveryRunList}
          edit={DeliveryRunEdit}
          create={DeliveryRunCreate}
          show={DeliveryRunShow}
        />
        <Resource
          name="Cultivar"
          list={CultivarList}
          edit={CultivarEdit}
          create={CultivarCreate}
          show={CultivarShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Commodity"
          list={CommodityList}
          edit={CommodityEdit}
          create={CommodityCreate}
          show={CommodityShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
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
