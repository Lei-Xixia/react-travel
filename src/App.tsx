import React from "react";
import styles from "./App.module.css";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
} from "./components";
import { Row, Col, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockups";

import sideImg1 from "./assets/images/img1.png";
import sideImg2 from "./assets/images/img2.png";
import sideImg3 from "./assets/images/img3.png";



function App() {
  return (
    <div className={styles.App}>
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
              爆款推荐
            </Typography.Title>
          }
          sideImage={sideImg1}
          products={productList1}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              新品上市
            </Typography.Title>
          }
          sideImage={sideImg2}
          products={productList2}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              国内旅游推荐
            </Typography.Title>
          }
          sideImage={sideImg3}
          products={productList3}
        />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
