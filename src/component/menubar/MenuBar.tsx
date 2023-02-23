import React, { useState } from "react";
import styles from "./MenuBar.module.scss";
import { Button, Col, Row, Tooltip } from "antd";
import {
  PlaySquareOutlined,
  ReloadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import DarkModeButton from "../darkmode/DarkModeButton";
import Tiggers from "../modal/Popup";
import ParentComponent from "../modal/ParentComponent";

const settingStock = () => {
  console.log("Setting Stock");
};

const onSyncData = () => {
  console.log("Sync Data");
};

const onReloadData = () => {
  console.log("Reload Data");
};
interface Props {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  isDarkMode: boolean

}


function MenuBar(props : Props) {
  const {setDarkMode, isDarkMode} = props;
  // const [isDarkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = (checked: boolean) => {
  //   setDarkMode(checked);
  // };

  return (
    <div>
    <Row gutter={2} className={styles.menuBar}>
      <Col xs={24} md={6} className={styles.menuBarItem}>
        <Tooltip title="종목 설정">
          <ParentComponent
            isDarkMode = {isDarkMode}
          />
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
          <DarkModeButton 
            setDarkMode={setDarkMode}
          />
        </Tooltip>
      </Col>
    </Row>
  </div>
  );
}

export default MenuBar;
