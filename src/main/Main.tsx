import Grid from "@toast-ui/react-grid";
import React from "react";
import { OptColumn, OptHeader, OptRow } from "tui-grid/types/options";
import Layout from "../component/Layout";
import MenuBar from "../component/MenuBar";
import styles from "./Main.module.scss";
import "./grid.css"

const columns: OptColumn[] = [
  {
    header: "Name",
    name: "name",
    align: "center",
  },
  {
    header: "Artist",
    name: "artist",
    align: "center",
  },
  {
    header: "Release",
    name: "release",
    align: "center",
  },
  {
    header: "Genre",
    name: "genre",
    align: "center",
  },
];

const data: OptRow[] = [
  {
    name: "Beautiful Lies",
    artist: "Birdy",
    release: "2016.03.26",
    genre: "Pop",
  },
];


function Main() {
  return (
    <div>
        <MenuBar />
        <Grid className={styles.mainGrid} columns={columns} data={data}
        >
        </Grid>
    </div>
  );
}

export default Main;
