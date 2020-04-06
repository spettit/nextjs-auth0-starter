import MainLayout from "../components/layout/MainLayout";
import { useFetchUser } from "../utils/userContext";
import Router from "next/router";

export default function Profile() {
  const { user, loading } = useFetchUser();
  if (loading) {
    return <span>Loading ..</span>;
  }
  if (!user) {
    Router.replace("/");
  }
  console.log(user["http://www.nextjs-auth/role"].roles);
  return (
    <MainLayout>
       <div style={{padding: "50px 10px", textAlign: "center"}}>
        <h1>🤸</h1>
        <p>Welcome to the Profile Page!</p>
        <p>{user.name}</p>
        <p>{user["http://www.nextjs-auth/role"].roles}</p>
        {JSON.stringify(user, null, 2)}
      </div>
    </MainLayout>
  );
}
