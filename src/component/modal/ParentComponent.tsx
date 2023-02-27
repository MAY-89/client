import { SettingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Modal from "antd/es/modal/Modal";
import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import axios, { AxiosResponse } from "axios";
import MyGrid from "../myGrid/MyGrid";
import dummyTigger from "../../resource/dummyTigger.json";
import { GridColDef, GridRowsProp } from "@material-ui/data-grid";

const url =
  window.origin.indexOf("3000") > 0
    ? "http://localhost:80"
    : "https://클라우드 주소";

const columns: GridColDef[] = [
  {
    field: "tigger",
    headerName: "종목",
    flex:1,
    align: "center",
    filterable:true,
    sortable:true,
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
  const [rows, setRows] = useState<GridRowsProp>(dummyTigger);
  const [error, setError] = useState(null);

  useEffect(() => {
    // getTiggerData();
    const data : any = dummyTigger.map((val, idx) => {
     return {
      "id": idx,
      "tigger": val.tigger
     }
    });
    setRows(data);
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
        style={{ height: 300 }}
      >
        <MyGrid
          id="myModalGrid"
          gridProps={{
            columns,
            rows,
            bodyHeight: 300,
            autoHeight:false
            // rowHeaders: ["rowNum"],
            // heightResizable: true,
            // rowHeight: 20,
          }}
          theme={isDarkMode}
        ></MyGrid>
      </Modal>
    </div>
  );
};

export default ParentComponent;
