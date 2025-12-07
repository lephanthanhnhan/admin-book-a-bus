import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import RoutesPage from "../pages/RoutesPage";
import MainLayout from "../components/layout/MainLayout";
      

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/admin" element={<DashboardPage />} />
        {/* Tuyến đường */}
        <Route path="admin/routes" element={<RoutesPage />} />
      </Routes>
    </MainLayout>
  );
}
