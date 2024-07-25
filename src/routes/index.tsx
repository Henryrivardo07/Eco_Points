import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "@/pages";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import EditProfilePage from "@/pages/users/edit-profile";
import ProfilePage from "@/pages/users/profile";
import AdminDashboardPage from "@/pages/admin/dashboard";
import ManageUserPage from "@/pages/admin/manage-user";
import ReportsPage from "@/pages/admin/reports";
import EditUserPage from "@/pages/admin/edit-user";
import ManageRewardsPage from "@/pages/admin/manage-rewards";
import VerifyWasteDepositPage from "@/pages/admin/verify-waste-deposit";
import EditRewardPage from "@/pages/admin/edit-reward";
import WasteLocationPage from "@/pages/waste/location";
import WasteDepositPage from "@/pages/waste/deposit";
import WasteHistoryPage from "@/pages/waste/history";
import AddRewardPage from "@/pages/admin/add-reward";
import DetailWasteDepositPage from "@/pages/admin/detail-waste-deposit";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: () => "Home | ECO-POINTS",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/profile/edit",
      element: <EditProfilePage />,
    },
    {
      path: "/admin/reports",
      element: <ReportsPage />,
    },
    {
      path: "/admin/dashboard",
      element: <AdminDashboardPage />,
    },
    {
      path: "/admin/manage-user",
      element: <ManageUserPage />,
    },
    {
      path: "/admin/edit-user",
      element: <EditUserPage />,
    },
    {
      path: "/admin/manage-rewards",
      element: <ManageRewardsPage />,
    },
    {
      path: "/admin/verify-waste-deposit",
      element: <VerifyWasteDepositPage />,
    },
    {
      path: "/admin/edit-reward",
      element: <EditRewardPage />,
    },
    {
      path: "/locations",
      element: <WasteLocationPage />,
    },
    {
      path: "/waste/deposit",
      element: <WasteDepositPage />,
    },
    {
      path: "/waste/history",
      element: <WasteHistoryPage />,
    },
    {
      path: "/admin/add-reward",
      element: <AddRewardPage />,
    },
    {
      path: "/admin/detail-waste-deposit",
      element: <DetailWasteDepositPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
