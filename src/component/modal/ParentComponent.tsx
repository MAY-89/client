import { SettingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Modal from "antd/es/modal/Modal";
import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import axios, { AxiosResponse } from "axios";


const url =
        window.origin.indexOf("3000") > 0
          ? "http://localhost:80"
          : "https://클라우드 주소";

interface Props {
  isDarkMode : boolean
}

const ParentComponent = (props : Props) => {
  const {isDarkMode} = props;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [data, setData] = useState<AxiosResponse>();
  const [error, setError] = useState(null);

  useEffect(() => {
    getTiggerData();
  }, [data]);

  const getTiggerData = async () => {
    try {
      const response = await axios.get(url + "/api/getUserTigger");
      setData(response);
    } catch (e: any) {
      setError(e);
    }
  };

  const saveTiggerData = async () => {
    try {
      const response = await axios.post(url + "/api/saveUserTigger");

    } catch (e: any) {
      setError(e);
    }
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const onClickOkBtn = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Button
        type="dashed"
        shape="default"
        icon={<SettingOutlined />}
        onClick={handleOpenPopup}
      />
      <Modal
        open={isPopupOpen}
        onOk={() => setIsPopupOpen(false)}
        onCancel={() => setIsPopupOpen(false)}
        width={1000}
      >
        테스트 합니다.
      </Modal>
    </div>
  );
};

export default ParentComponent;
