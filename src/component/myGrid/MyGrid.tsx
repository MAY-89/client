import { OptRowHeader } from "tui-grid/types/options";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowData,
  GridRowsProp,
} from "@material-ui/data-grid";
import { useEffect, useState } from "react";

export interface GridProps {
  gridProps: {
    columns: GridColDef[];
    rows: GridRowsProp;
    rowHeight?: number;
    bodyHeight?: number;
    heightResizable?: boolean;
    rowHeaders?: OptRowHeader[];
    autoHeight: boolean;
  };
  theme: boolean;
  id: string;
}

export interface CellRendererType {
  getElement(): Element;
}

function MyGrid({ gridProps, theme, id }: GridProps): JSX.Element {
  const getRowId = (row: GridRowData) => {
    return row.id;
  };

  const [themeStyle, setThemeStyle] = useState<React.CSSProperties>();

  useEffect(() => {
    if (theme === false) {
      setThemeStyle({
        height: gridProps.bodyHeight,
        backgroundColor: "#F8F7F4",
        borderColor: "#eaeaea",
        border: "solid 1px",
      });
    } else {
      setThemeStyle({
        height: gridProps.bodyHeight,
        backgroundColor: "#696969",
        borderColor: "#e4e4e4",
        border: "solid 1px",
      });
    }
  }, [theme]);

  const getCellClassName = (params: GridCellParams, details?: any) => {
    let cell: any = params.getValue(params.id, params.field);
    let cssStyle = "cell-normal";

    if (cell && cell.level) {
      switch (cell.level) {
        case 1:
          cssStyle = "cell-levelOne";
          break;
        case 2:
          cssStyle = "cell-levelTwo";
          break;
        case 3:
          cssStyle = "cell-levelThree";
          break;
        case 4:
          cssStyle = "cell-levelFour";
          break;
        case 5:
          cssStyle = "cell-levelFive";
          break;
        case 6:
          cssStyle = "cell-black";
          break;
        case 7:
          cssStyle = "cell-danger";
          break;
      }
      return cssStyle;
    }
    return cssStyle;
  };

  return (
    <div>
      <DataGrid
        {...gridProps}
        getRowId={getRowId}
        rowHeight={30}
        style={themeStyle}
        scrollbarSize={100}
        autoPageSize={true}
        getCellClassName={getCellClassName}
        headerHeight={40}
      />
    </div>
  );
}

export default MyGrid;
