import React from "react";
import styles from "./SignInPage.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ComponentWithRouterProp() {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return { location, navigate, params };
}

export const SignInPage: React.FC = () => {
  console.log(ComponentWithRouterProp());
  return (
    <div>
      <h1>登录!!!!!!!!!</h1>
    </div>
  );
};
