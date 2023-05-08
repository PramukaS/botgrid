import React, { useState } from "react";
import { InputBase, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { SYSTEM_DEFAULT_THEME } from "../../../Theme";

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <InputBase
      placeholder="Search Bot"
      style={{
        padding: "5px 10px 5px 20px",
        borderRadius: 5,
        backgroundColor: "#d0d0d0",
        marginRight: "auto",
        width: 600,
      }}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      endAdornment={
        <InputAdornment
          position="end"
          style={{
            color: SYSTEM_DEFAULT_THEME.PRIMARY_COLOR,
          }}
        >
          <SearchOutlinedIcon
            style={{
              fontSize: isFocused ? 35 : 25,
              transition: isFocused ? "fontSize 0.3s ease" : "",
            }}
          />
        </InputAdornment>
      }
    />
  );
}

export default SearchBar;
