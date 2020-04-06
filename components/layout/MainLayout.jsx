import React from "react";
import Navbar from "./Navbar";
import { UserProvider, useFetchUser } from "../../utils/User";

const MainLayout = (props) => {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={{ user, loading }}>
      <Navbar />
      <div style={{minHeight: "80vh"}}>{props.children}</div>
    </UserProvider>
  );
};
export default MainLayout;
