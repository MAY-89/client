import { CellRendererProps } from "tui-grid/types/renderer";
// import { CellRendererType } from "../component/myGrid/MyGrid";
import DataItem from "../items/DataItem";

export default class MyColorRenderer {
  el: HTMLElement;
  data?: DataItem;
  gridEl: HTMLElement;
  constructor(props: CellRendererProps) {
    this.el = document.createElement("div");
    this.el.style.width = "100%";
    this.el.style.height = "100%";
    this.el.style.boxSizing = "border-box";
    this.el.style.padding = "5px";
    const { grid , rowKey, columnInfo, value }: CellRendererProps = props;
    const gridEl : HTMLElement = grid.getElement(rowKey, columnInfo.name) as HTMLElement;
    this.gridEl = gridEl
    // grid.addRowClassName(rowKey, "tui-grid-cell.cell")
    this.render(props);
  }

  getElement() {
    return this.el;
  }

  getValue() {
    return this.el.innerHTML;
  }

  render(props: CellRendererProps) {
    const value = props.value;
    let stringValue = JSON.stringify(value);
    let dataItem: DataItem = JSON.parse(stringValue);
    this.data = dataItem;
    this.gridEl.style.background = 'green';
    this.el.textContent = String(this.data.value);
    props.value = value;
    return this.el;
  }
}
