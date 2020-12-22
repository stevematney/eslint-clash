import React, { createContext } from "react";

const basicContext = { yes: "yes", no: "no" };
const AContext = createContext(basicContext);

export default (function () {
  return (
    <AContext.Provider value={basicContext}>
      {/* put stuff in here if you want */}
    </AContext.Provider>
  );
} as React.FC);
