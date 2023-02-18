import { CellRendererProps } from "tui-grid/types/renderer";
import DataItem from "../items/DataItem";

export default class MyColorRenderer {
  el: HTMLDivElement;
  constructor(props: CellRendererProps) {
    const el = document.createElement("div");
    const { grid, rowKey, columnInfo, value }: CellRendererProps = props;

    el.addEventListener("input", () => {
      grid.setValue(rowKey, columnInfo.name, el.innerHTML);
    });


    // let data: DataItem = JSON.parse(String(value));
    let stringValue = JSON.stringify(value);
    let data : DataItem = JSON.parse(stringValue);

    switch (data.level) {
      case 0 :
        grid.addCellClassName(rowKey, columnInfo.name, "cell-inven");
        break;
      case 1:
        grid.addCellClassName(rowKey, columnInfo.name, "cell-red");
        break;
      case 2:
        grid.addCellClassName(rowKey, columnInfo.name, "cell-green");
        break;
      case 3:
        break;
      case 4:
        grid.addCellClassName(rowKey, columnInfo.name, "cell-yellow");
        break;
      case 5:
        grid.addCellClassName(rowKey, columnInfo.name, "cell-danger");
      break;
      default:
        grid.addCellClassName(rowKey, columnInfo.name, "cell-black");
        break;
    }

    
    grid.setValue(rowKey, columnInfo.name, data.value);

    this.el = el;
    this.render(props);
  }

  getElement() {
    return this.el;
  }

  getValue() {
    return this.el.innerHTML;
  }

  render(props: CellRendererProps) {
    this.el.innerHTML = String(props.value);
  }
}
