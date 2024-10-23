/** @format */

import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "../provider/AuthProvider";

const Main = lazy(() => import("../../pages/main/mainPage"));
const Page404 = lazy(() => import("../../pages/notFound/PageNotFound"));
const Dashboard = lazy(() => import("../../pages/dashboard/dashboard"));
const Login = lazy(() => import("../../pages/login/login"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>loading....</div>}>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </Suspense>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
    errorElement: <Page404 />,
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
]);
