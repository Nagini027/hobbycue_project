import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import InputForm from "./InputForm";

const TabComponent = () => {
  const [key, setKey] = useState("signin");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="signin" title="Sign In">
        <InputForm />
      </Tab>
      <Tab eventKey="join in" title="Join In">
        <InputForm />
      </Tab>
    </Tabs>
  );
};

export default TabComponent;
