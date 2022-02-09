import React from "react";
import {
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartners,
} from "../../components";
import { Row, Col, Typography, Spin } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { giveMeDataActionCreator } from "../../redux/recommendProducts/recommendProductsActions";
import { MainLayout } from "../../layouts/mainLayout";

import sideImg1 from "../../assets/images/img1.png";
import sideImg2 from "../../assets/images/img2.png";
import sideImg3 from "../../assets/images/img3.png";

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    giveMeData: () => {
      dispatch(giveMeDataActionCreator());
    },
  };
};

type PropsType = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class HomePageComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.giveMeData();
  }
  render() {
    const { t, productList, loading, error } = this.props;
    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginRight: "auto",
            marginLeft: "auto",
            width: "100%",
          }}
        ></Spin>
      );
    }
    if (error) {
      return <div>网站出错: {error}</div>;
    }
    return (
      <MainLayout>
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
          products={productList[0].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              {t("home_page.new_arrival")}
            </Typography.Title>
          }
          sideImage={sideImg2}
          products={productList[1].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              {t("home_page.domestic_travel")}
            </Typography.Title>
          }
          sideImage={sideImg3}
          products={productList[2].touristRoutes}
        />
        <BusinessPartners />
      </MainLayout>
    );
  }
}
export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePageComponent));
