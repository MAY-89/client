import Grid from "@toast-ui/react-grid";
import React from "react";
import { OptColumn, OptRow, OptRowHeader } from "tui-grid/types/options";
import { ClipboardCopyOptions } from "tui-grid/types/store/column";

export interface GridProps {
  gridProps: {
    columns: OptColumn[];
    data?: OptRow[];
    rowHeight?: number;
    bodyHeight?: number;
    heightResizable?: boolean;
    rowHeaders?: OptRowHeader[];
  };
  backColor?: string;
  foreColor?: string;
  theme: string;
}

export interface CellRendererType {
  getElement(): Element;
}

function MyGrid({ gridProps, theme }: GridProps): JSX.Element {
  const copyOptions: ClipboardCopyOptions = {
    useFormattedValue: true,
    useListItemText: true,
  };

  return <Grid {...gridProps} copyOptions={copyOptions} />;
}

export default MyGrid;
