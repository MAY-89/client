import Grid from "@toast-ui/react-grid";
import React from "react";
import { OptColumn, OptRow } from "tui-grid/types/options";
import MenuBar from "../component/MenuBar";

const columns: OptColumn[] = [
  {
    header: 'Name',
    name: 'name'
  },
  {
    header: 'Artist',
    name: 'artist'
  },
  {
    header: 'Release',
    name: 'release'
  },
  {
    header: 'Genre',
    name: 'genre'
  }
];

const data: OptRow[] = [
  {
    name: 'Beautiful Lies',
    artist: 'Birdy',
    release: '2016.03.26',
    genre: 'Pop'
  }
]

function Main() {
  return (
    <div>
      <MenuBar></MenuBar>
      <Grid 
      columns={columns}
      data={data}></Grid>
    </div>
  );
}

export default Main;
