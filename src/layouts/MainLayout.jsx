import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  const params = useParams();
  const curUser = params.username;

  return (
    <div>
      <Navbar curUser={curUser} />
      <Outlet context={{ curUser }} />
      <Footer />
    </div>
  );
}
