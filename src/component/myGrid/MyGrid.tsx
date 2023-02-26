import Grid from "@toast-ui/react-grid";
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
  theme: boolean;
  id:string
}

export interface CellRendererType {
  getElement(): Element;
}

function MyGrid({ gridProps, theme, id }: GridProps): JSX.Element {
  const copyOptions: ClipboardCopyOptions = {
    useFormattedValue: true,
    useListItemText: true,
  };

  return (
    // <div>
    //   <Button>추가</Button>
    //   <Button>삭제</Button>
    <Grid id={id} {...gridProps}  copyOptions={copyOptions} minRowHeight={30} />
    // </div>
  );
}

export default MyGrid;
