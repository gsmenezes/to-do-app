import React from "react";

import FilterProvider from "./State/Filter/Provider";
import TopicsProvider from "./State/Topics/Provider";

function App() {
  return (
    <TopicsProvider>
      <FilterProvider>
        <p>Teste</p>
      </FilterProvider>
    </TopicsProvider>
  );
}

export default App;
