import React from "react";
import styles from "./MenuBar.module.scss";
import { Button, Col, Row, Space, Tooltip } from "antd";
import { PlaySquareOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";

function MenuBar() {
  return (
    <div>
      <Row gutter={2} className={styles.menuBar}>
        <Col xs={24} md={6} className={styles.menuBarItem}>
          <Tooltip title="종목 설정">
            <Button type="dashed" shape="default" icon={<SettingOutlined />} className={styles.button} />
          </Tooltip>
          <Tooltip title="실시간 크롤링">
          <Button type="dashed" shape="default" icon={<PlaySquareOutlined />} className={styles.button}/>
          </Tooltip>
          <Tooltip title="search">
            <Button type="dashed" shape="default" icon={<SearchOutlined />} className={styles.button}/>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
}

export default MenuBar;
