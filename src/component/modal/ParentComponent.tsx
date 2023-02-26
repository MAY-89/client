import { SettingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Modal from "antd/es/modal/Modal";
import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import axios, { AxiosResponse } from "axios";
import MyGrid from "../myGrid/MyGrid";
import dummyTigger from "../../resource/dummyTigger.json";
import { OptColumn, OptRow } from "tui-grid/types/options";
import MyModalRenderer from "../../handler/MyModalRederer";

const url =
  window.origin.indexOf("3000") > 0
    ? "http://localhost:80"
    : "https://클라우드 주소";

const columns: OptColumn[] = [
  {
    header: "종목",
    name: "tigger",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 100,
    sortable: true,
    resizable: true,
  },
];

interface Props {
  isDarkMode: boolean;
  className: string;
}

const ParentComponent = (props: Props) => {
  const { isDarkMode, className } = props;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [data, setData] = useState<AxiosResponse>();
  const [data, setData] = useState<OptRow[]>();
  const [error, setError] = useState(null);

  useEffect(() => {
    // getTiggerData();
    setData(dummyTigger);
  }, []);

  // const getTiggerData = async () => {
  //   try {
  //     const response = await axios.get(url + "/api/getUserTigger");
  //     // setData(response);
  //   } catch (e: any) {
  //     setError(e);
  //   }
  // };

  // const saveTiggerData = async () => {
  //   try {
  //     const response = await axios.post(url + "/api/saveUserTigger");
  //   } catch (e: any) {
  //     setError(e);
  //   }
  // };

  const handleOpenPopup = (isOpen: boolean) => {
    setIsPopupOpen(isOpen);
  };

  const onClickOkBtn = () => {
    setIsPopupOpen(false);
  };
  const onClickClose = () => {};

  return (
    <div>
      <Button
        type="dashed"
        shape="default"
        icon={<SettingOutlined />}
        onClick={() => handleOpenPopup(true)}
        className={className}
      />

      <Modal
        open={isPopupOpen}
        onOk={() => handleOpenPopup(false)}
        onCancel={() => handleOpenPopup(false)}
        width={300}
        style={{ height: 1000 }}
      >
        <MyGrid
          id="myModalGrid"
          gridProps={{
            columns,
            data,
            bodyHeight: 300,
            rowHeaders: ["rowNum"],
            heightResizable: true,
            rowHeight: 20,
          }}
          theme={isDarkMode}
        ></MyGrid>
      </Modal>
    </div>
  );
};

export default ParentComponent;
