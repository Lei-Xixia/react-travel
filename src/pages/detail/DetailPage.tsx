import React from "react";
import styles from "./DetailPage.module.css";
import { useParams } from "react-router-dom";

interface MatchParams {
  touristRouteId?: string;
}
export const DetailPage: React.FC<MatchParams> = () => {
  let params = useParams();
  return <div>旅游路线详情页面: {params.touristRouteId}</div>;
};
