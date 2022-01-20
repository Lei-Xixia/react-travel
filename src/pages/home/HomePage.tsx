import React from "react";
import styles from "./HomePage.module.css";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartners,
} from "../../components";
import { Row, Col, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockups";

import sideImg1 from "../../assets/images/img1.png";
import sideImg2 from "../../assets/images/img2.png";
import sideImg3 from "../../assets/images/img3.png";

import { withTranslation, WithTranslation } from "react-i18next";

class HomePageComponent extends React.Component<WithTranslation> {
  render() {
    // console.log(this.props.t);
    const { t } = this.props;
    return (
      <>
        <Header></Header>
        {/* 页面内容content */}
        <div className={styles["page-content"]}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            sideImage={sideImg1}
            products={productList1}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImg2}
            products={productList2}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImg3}
            products={productList3}
          />
          <BusinessPartners />
        </div>
        <Footer></Footer>
      </>
    );
  }
}
export const HomePage = withTranslation()(HomePageComponent);
