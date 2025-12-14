import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import RoutesPage from "../pages/RoutesPage";
import BookingManagementPage from "../pages/BookingManagementPage";
import MainLayout from "../components/layout/MainLayout";
import { TripManagementPage } from "../pages/TripManagementPage";

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/admin" element={<DashboardPage />} />
        <Route path="/admin/bookings" element={<BookingManagementPage />} />
        <Route path="/admin/trips" element={<TripManagementPage />} />
        {/* Tuyến đường */}
        <Route path="/admin/routes" element={<RoutesPage />} />
      </Routes>
    </MainLayout>
  );
}
