import React, { useState } from "react";
import styles from "./MenuBar.module.scss";
import { Button, Col, Row, Tooltip } from "antd";
import {
  PlaySquareOutlined,
  ReloadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import DarkModeButton from "../darkmode/DarkModeButton";
// import DarkModeToggle from "../darkmode/DarkModeToggle";

const settingStock = () => {
  console.log("Setting Stock");
};

const onSyncData = () => {
  console.log("Sync Data");
};

const onReloadData = () => {
  console.log("Reload Data");
};

function MenuBar() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <div>
    <Row gutter={2} className={styles.menuBar}>
      <Col xs={24} md={6} className={styles.menuBarItem}>
        <Tooltip title="종목 설정">
          <Button type="dashed" shape="default" icon={<SettingOutlined />} className={styles.button} 
          onClick ={settingStock}/>
        </Tooltip>
        <Tooltip title="실시간 크롤링">
        <Button type="dashed" shape="default" icon={<PlaySquareOutlined />} className={styles.button}
        onClick ={onSyncData}/>
        </Tooltip>
        <Tooltip title="리프레쉬">
          <Button type="dashed" shape="default" icon={<ReloadOutlined />} className={styles.button}
          onClick ={onReloadData}/>
        </Tooltip>
        <Tooltip title="모드">
          <DarkModeButton/>
        </Tooltip>
      </Col>
    </Row>
  </div>
  );
}

export default MenuBar;
