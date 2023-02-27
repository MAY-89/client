import React, { useEffect, useState } from "react";
import MenuBar from "../component/menubar/MenuBar";
import "./grid.css";
import dummy from "../resource/dummydata.json";
import MyGrid from "../component/myGrid/MyGrid";
import {
  GridColDef,
  GridFilterOperator,
  GridRowsProp,
  GridToolbarContainer,
  GridToolbarExport,
  GridValueFormatterParams,
} from "@material-ui/data-grid";

const cols: GridColDef[] = [
  {
    headerName: "종목",
    field: "invenst",
    align: "center",
    filterable: true,
    sortable: true,
    minWidth: 120,
    // filterOperators: GridFilterOperator[] 
  },
  {
    field: "fiftytwoHigher",
    headerName: "52주 고점",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 140,
  },
  {
    field: "fiftytwoLower",
    headerName: "52주 저점",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 140,
  },
  {
    field: "rsi",
    headerName: "RSI",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 50,
  },
  {
    field: "per",
    headerName: "PER",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 100,
  },
  {
    field: "roe",
    headerName: "ROE",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 100,
  },
  {
    field: "pbr",
    headerName: "PBR",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    minWidth: 100,
    sortable: true,
  },
  {
    field: "fpe",
    headerName: "F-P/E",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 100,
  },
  {
    field: "eps",
    headerName: "EPS",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 100,
  },
  {
    field: "epsy",
    headerName: "EPS Y",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 100,
  },
  {
    field: "margin",
    headerName: "Margine",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 120,
  },
  {
    field: "roa",
    headerName: "ROA",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 100,
  },
  {
    field: "peg",
    headerName: "PEG",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 100,
  },
  {
    field: "roi",
    headerName: "ROI",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 100,
  },
  {
    field: "smath",
    headerName: "SMA200",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 120,
  },
  {
    field: "smafifty",
    headerName: "SMA50",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 120,
  },
  {
    field: "smatwenty",
    headerName: "SMA20",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 120,
  },
  {
    field: "price",
    headerName: "PRICE",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 120,
  },
  {
    field: "tprice",
    headerName: "TAGET PRICE",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 150,
  },
  {
    field: "odds",
    headerName: "배당률",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 100,
  },
  {
    field: "fluctuation",
    headerName: "등락율",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 80,
  },
  {
    field: "marketCap",
    headerName: "시가총액",
    align: "center",
    disableColumnMenu: true,
    filterable: false,
    sortable: true,
    minWidth: 150,
  },
];

function Main() {
  const [rows, setRows] = useState<GridRowsProp>(dummy);
  const [isDarkMode, setDarkMode] = useState(false);
  const [columns, setColumns] = useState<GridColDef[]>(cols);

  useEffect(() => {
    const userColumns: GridColDef[] = cols.map((value, idx) => {
      return {
        ...value,
        headerAlign: "center",
        valueGetter: (params: any) => {
          return params.value;
        },
        valueFormatter: (params: GridValueFormatterParams) => {
          const value = params.row[params.field].value;
          return value;
        },
        sortComparator: (v1, v2, param1, param2) => {
          const value1 = param1.api.getCellValue(param1.id, param1.field).value;
          const value2 = param2.api.getCellValue(param2.id, param2.field).value;
          if (value1 < value2) {
            return -1;
          } else if (value1 > value2) {
            return 1;
          } else {
            return 0;
          }
        },
        headerClassName: "header-color",
      };
    });
    setColumns(userColumns);
    setRows(dummy);
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <MenuBar setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <MyGrid
        id="mainGrid"
        gridProps={{
          columns,
          rows,
          autoHeight: true,
          // bodyHeight: 100,
          // rowHeaders: ["rowNum"],
          // heightResizable: true,
          // rowHeight: 20,
        }}
        theme={isDarkMode}
      ></MyGrid>
    </div>
  );
}

export default Main;
