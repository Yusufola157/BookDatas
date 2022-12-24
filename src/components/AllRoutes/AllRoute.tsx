import React from "react";
import styled from "styled-components";
import { useRoutes } from "react-router-dom";
import Main from "../Main/Main";
import UploadBook from "../Main/UploadBook";

const AllRoute = () => {
  const element = useRoutes([
    {
      element: <Main />,
      path: "/",
    },
    {
      element: <UploadBook />,
      path: "/upload",
    },
  ]);
  return element;
};
export default AllRoute;
