// src/services/dashboardService.ts

import axios from 'axios';
// Giả định bạn đã tạo file này
import { DashboardMetrics, WeeklyRevenueItem, Transaction } from '../types/dashboard'; 

const API_URL = 'http://your-api-domain.com/api/v1'; 

// ----------------------------------------------------
// 1. Fetch Metrics
// ----------------------------------------------------
export async function fetchMetrics(): Promise<DashboardMetrics> {
  try {
    const response = await axios.get<DashboardMetrics>(`${API_URL}/dashboard/metrics`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi fetch Metrics:", error);
    // Trả về dữ liệu mặc định an toàn dựa trên data mẫu của bạn
    return {
      totalRevenue: { value: "15,000,000 đ", subtitle: "+20.1% from last month", color: "text-blue-600" },
      ticketsSold: { value: "120", subtitle: "+15% from yesterday", color: "text-orange-500" },
      busesRunning: { value: "5 Running", subtitle: "2 in maintenance", color: "text-green-500" },
    };
  }
}

// ----------------------------------------------------
// 2. Fetch Weekly Revenue
// ----------------------------------------------------
export async function fetchWeeklyRevenue(): Promise<WeeklyRevenueItem[]> {
  try {
    const response = await axios.get<WeeklyRevenueItem[]>(`${API_URL}/dashboard/weekly-revenue`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi fetch Weekly Revenue:", error);
    // Trả về data mẫu của bạn nếu lỗi
    return [
      { name: "Mon", revenue: 2 },
      { name: "Tue", revenue: 1.5 },
      { name: "Wed", revenue: 2.5 },
      { name: "Thu", revenue: 1.8 },
      { name: "Fri", revenue: 4 },
      { name: "Sat", revenue: 5.5 },
      { name: "Sun", revenue: 6 },
    ]; 
  }
}

// ----------------------------------------------------
// 3. Fetch Recent Transactions
// ----------------------------------------------------
export async function fetchRecentTransactions(): Promise<Transaction[]> {
  try {
    const response = await axios.get<Transaction[]>(`${API_URL}/dashboard/transactions?limit=7`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi fetch Recent Transactions:", error);
    // Trả về data mẫu của bạn nếu lỗi
    return [
      { id: 1, user: "User A", email: "user.a@example.com", amount: "+200,000 đ", status: "Paid" },
      { id: 2, user: "User B", email: "user.b@example.com", amount: "+150,000 đ", status: "Pending" },
      { id: 3, user: "User C", email: "user.c@example.com", amount: "+300,000 đ", status: "Failed" },
      { id: 4, user: "User D", email: "user.d@example.com", amount: "+200,000 đ", status: "Paid" },
      { id: 5, user: "User E", email: "user.e@example.com", amount: "+300,000 đ", status: "Paid" },
      { id: 6, user: "User F", email: "user.f@example.com", amount: "+100,000 đ", status: "Paid" },
      { id: 7, user: "User G", email: "user.g@example.com", amount: "+50,000 đ", status: "Pending" },
    ]; 
  }
}