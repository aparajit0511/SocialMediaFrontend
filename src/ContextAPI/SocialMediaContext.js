import React, { useState } from "react";

export const SocialMediaData = React.createContext();

export const SocialMediaContext = ({ children }) => {
  const [UpdatedData, setUpdatedData] = useState("");
  return (
    <SocialMediaData.Provider value={{ UpdatedData, setUpdatedData }}>
      {children}
    </SocialMediaData.Provider>
  );
};
