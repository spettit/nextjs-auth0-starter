import Link from "next/link";
import { useFetchUser } from "../../utils/userContext";

const Navbar = () => {
  const { user, loading } = useFetchUser();
  return (
    <div style={{backgroundColor: "#dddbe8"}}>
      <Link href="/">
        <a>Home</a>
      </Link>
      {user && (
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      )}
      {!user && (
        <Link href="/api/login">
          <a>Login</a>
        </Link>
      )}
      {user && (
        <Link href="/api/logout">
          <a>Logout</a>
        </Link>
      )}
    </div>
  );
};
export default Navbar;
