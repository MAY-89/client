import React, { useEffect, useState } from "react";
import "tui-grid/dist/tui-grid.css";
import TGrid from "tui-grid";
import { OptColumn, OptRow } from "tui-grid/types/options";
import MenuBar from "../component/menubar/MenuBar";
import "./grid.css";
import MyColorRenderer from "../handler/MyColorRederer";
import dummy from "../resource/dummydata.json";
import MyGrid from "../component/myGrid/MyGrid";

const columns: OptColumn[] = [
  {
    header: "종목",
    name: "invenst",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    sortable: true,
    resizable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "52주고점",
    name: "fiftytwoHigher",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "52주저점",
    name: "fiftytwoLower",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "RSI",
    name: "rsi",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "PER",
    name: "per",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "ROE",
    name: "roe",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "PBR",
    name: "pbr",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "F-P/E",
    name: "fpe",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "EPS",
    name: "eps",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "EPS Y",
    name: "epsy",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "Margine",
    name: "margin",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "ROA",
    name: "roa",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "PEG",
    name: "peg",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "ROI",
    name: "roi",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "SMA200",
    name: "smath",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "SMA50",
    name: "smafifty",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "SMA20",
    name: "smatwenty",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "PRICE",
    name: "price",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "TAGET PRICE",
    name: "tprice",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "배당률",
    name: "odds",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    width: 80,
    resizable: true,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "등락율",
    name: "fluctuation",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    resizable: true,
    width: 80,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
  {
    header: "시가총액",
    name: "marketCap",
    align: "center",
    filter: { type: "text", showApplyBtn: true, showClearBtn: true },
    sortingType: "desc",
    resizable: true,
    width: 200,
    sortable: true,
    renderer: {
      type: MyColorRenderer,
    },
  },
];

/**
 * Grid 기본 설정
 */
const onGridInit = () => {
  TGrid.applyTheme("default", {
    cell: {
      normal: {
        border: "black",
      },
      header: {
        background: "gray",
        text: "white",
      },
    },
  });
};

function Main() {
  const [data, setData] = useState<OptRow[]>();
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setData(dummy);
    onGridInit();
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <MenuBar 
        setDarkMode={setDarkMode}
        isDarkMode={isDarkMode}
      />
      <div id="mainGrid">
      <MyGrid
      id="mainGrid"
        gridProps={{
          columns,
          data,
          bodyHeight: 100,
          rowHeaders: ["rowNum"],
          heightResizable: true,
          rowHeight: 20,
        }}
        theme={isDarkMode}
      ></MyGrid>
    </div>
      {/* <Grid
        columns={columns}
        data={data}
        rowHeight={25}
        bodyHeight={100}
        heightResizable={false}
        rowHeaders={["rowNum"]}
        color={"#000000"}
      ></Grid> */}
    </div>
  );
}

export default Main;
