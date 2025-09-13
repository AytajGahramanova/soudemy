import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const SelectComponent = ({ sortValue, setSortValue }) => {
  return (
    <FormControl size="small" sx={{ minWidth: 200 }}>
      <InputLabel id="sort-select-label">Sırala</InputLabel>
      <Select
        labelId="sort-select-label"
        value={sortValue}
        label="Sırala"
        onChange={(e) => setSortValue(e.target.value)}
      >
        <MenuItem value="asc">Qiymət: azdan çoxa</MenuItem>
        <MenuItem value="desc">Qiymət: çoxdan aza</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
