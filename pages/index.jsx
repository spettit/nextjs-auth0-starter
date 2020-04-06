import MainLayout from "../components/layout/MainLayout";

export default function Index() {
  return (
    <MainLayout>
      <div style={{padding: "50px 10px", textAlign: "center"}}>
        <h1>🏠</h1>
        <p>Welcome to the Home Page!</p>
        <p> v 3 </p>
        <p>auth0 domain (must match)</p>
        <p>{process.env.AUTH0_DOMAIN}</p>
      </div>
    </MainLayout>
  );
}
