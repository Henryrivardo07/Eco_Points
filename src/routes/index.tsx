import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Homepage from "@/pages";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import EditProfilePage from "@/pages/users/edit-profile";
import ProfilePage from "@/pages/users/profile";

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
  ]);

  return <RouterProvider router={router} />;
}
