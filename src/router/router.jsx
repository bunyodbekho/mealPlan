import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage/MainPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import PlanPage from "../pages/PlanPage/PlanPage";
import ListPage from "../pages/ListPage/ListPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />

      <Route path="/:username" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="plan" element={<PlanPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
