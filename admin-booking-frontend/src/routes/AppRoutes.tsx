import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import MainLayout from "../components/layout/MainLayout";

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </MainLayout>
  );
}
