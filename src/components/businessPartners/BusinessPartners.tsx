import React from "react";
import styles from "./BusinessPartners.module.css";
import { Row, Col, Typography, Divider } from "antd";

import businessImg1 from "../../assets/images/business1.png";
import businessImg2 from "../../assets/images/business2.png";
import businessImg3 from "../../assets/images/business3.png";
import businessImg4 from "../../assets/images/business4.png";

import { useTranslation } from "react-i18next";

const companies = [
  { src: businessImg1, title: "Microsoft" },
  { src: businessImg2, title: "Youtube" },
  { src: businessImg3, title: "Ins" },
  { src: businessImg4, title: "Facebook" },
];

export const BusinessPartners: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.content}>
      <Divider orientation="left">
        <Typography.Title level={3}>
          {t("home_page.joint_venture")}
        </Typography.Title>
      </Divider>
      <Row>
        {companies.map((c, i) => (
          <Col span={6} key={"business-partner-" + i}>
            <img
              src={c.src}
              alt="business-partner"
              style={{
                width: "80%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
