import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VendorsPage from "./vendors/VendorsPage";
import ErrorPage from "./ErrorPage.tsx";
import UsersPage from "./users/UsersPage.tsx";
import ProductsPage from "./products/ProductsPage.tsx";
import RequestsPage from "./requests/RequestsPage.tsx";
import VendorCreatePage from "./vendors/VendorCreatePage.tsx";
import VendorEditPage from "./vendors/VendorEditPage.tsx";
import ProductCreatePage from "./products/ProductCreatePage.tsx";
import ProductEditPage from "./products/ProductEditPage.tsx";
import UserCreatePage from "./users/UserCreatePage.tsx";
import UserEditPage from "./users/UserEditPage.tsx";
import RequestCreatePage from "./requests/RequestCreatePage.tsx";
import RequestEditPage from "./requests/RequestEditPage.tsx";
import SignInPage from "./account/SignInPage.tsx";
import Layout from "./Layout.tsx";
import IndexPage from "./IndexPage.tsx";
import RequestDetailPage from "./requests/RequestDetailPage.tsx";
import RequestLineCreatePage from "./requestLines/RequestLineCreatePage.tsx";
import RequestLineEditPage from "./requestLines/RequestLineEditPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "signin", element: <SignInPage /> },
      {
        element: <Layout />,
        children: [
          { index: true, element: <IndexPage /> },
          {
            path: "requests",
            element: <RequestsPage />,
          },
          {
            path: "requests/create",
            element: <RequestCreatePage />,
          },
          {
            path: "requests/edit/:id",
            element: <RequestEditPage />,
          },
          {
            path: "requests/detail/:id",
            element: <RequestDetailPage />,
          },
          {
            path: "requests/detail/:id/requestline/create",
            element: <RequestLineCreatePage />,
          },
          {
            path: "requests/detail/:id/requestline/edit/:lineId",
            element: <RequestLineEditPage />,
          },
          {
            path: "products",
            element: <ProductsPage />,
          },
          {
            path: "products/create",
            element: <ProductCreatePage />,
          },
          {
            path: "products/edit/:id",
            element: <ProductEditPage />,
          },
          {
            path: "vendors",
            element: <VendorsPage />,
          },
          {
            path: "vendors/create",
            element: <VendorCreatePage />,
          },
          {
            path: "vendors/edit/:id",
            element: <VendorEditPage />,
          },
          {
            path: "users",
            element: <UsersPage />,
          },
          {
            path: "users/create",
            element: <UserCreatePage />,
          },
          {
            path: "users/edit/:id",
            element: <UserEditPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
