import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GatewayOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "../../redux/language/languageActions";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const language = useSelector((state) => state.language.language);
  const languageList = useSelector((state) => state.language.languageList);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const menuClickHandler = (e) => {
    if (e.key === "new") {
      dispatch(addLanguageActionCreator("新语言", "new_lang"));
    } else {
      dispatch(changeLanguageActionCreator(e.key));
    }
  };

  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClickHandler}>
                {languageList.map((l) => {
                  return <Menu.Item key={`languageList${l.code}`}>{l.name}</Menu.Item>;
                })}
                <Menu.Item key={"new"}>
                  {t("header.add_new_language")}
                </Menu.Item>
              </Menu>
            }
            icon={<GatewayOutlined></GatewayOutlined>}
          >
            {language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => navigate("register")}>
              {t("header.register")}
            </Button>
            <Button onClick={() => navigate("signIn")}>
              {t("header.signin")}
            </Button>
          </Button.Group>
        </div>
      </div>
      {/* central-header */}
      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className={styles["App-logo"]} />
          <Typography.Title className={styles.title} level={3}>
            {t("header.title")}
          </Typography.Title>
        </span>

        <Input.Search
          className={styles["search-input"]}
          placeholder={"请输入旅游目的地、主题、或关键字"}
        ></Input.Search>
      </Layout.Header>
      {/* bottom-header */}
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key={`item-1`}>{t("header.home_page")}</Menu.Item>
        <Menu.Item key={`item-2`}>{t("header.weekend")}</Menu.Item>
        <Menu.Item key={`item-3`}> {t("header.group")} </Menu.Item>
        <Menu.Item key={`item-4`}> {t("header.backpack")} </Menu.Item>
        <Menu.Item key={`item-5`}> {t("header.private")} </Menu.Item>
        <Menu.Item key={`item-6`}> {t("header.cruise")} </Menu.Item>
        <Menu.Item key={`item-7`}> {t("header.hotel")} </Menu.Item>
        <Menu.Item key={`item-8`}> {t("header.local")} </Menu.Item>
        <Menu.Item key={`item-9`}> {t("header.theme")} </Menu.Item>
        <Menu.Item key={`item-10`}> {t("header.custom")} </Menu.Item>
        <Menu.Item key={`item-11`}> {t("header.study")} </Menu.Item>
        <Menu.Item key={`item-12`}> {t("header.visa")} </Menu.Item>
        <Menu.Item key={`item-13`}> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key={`item-14`}> {t("header.high_end")} </Menu.Item>
        <Menu.Item key={`item-15`}> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key={`item-16`}> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  );
};
