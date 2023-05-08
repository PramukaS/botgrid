import React, { useState } from "react";
import { InputBase, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { inputContainer } from "./styles";
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
      style={inputContainer}
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
