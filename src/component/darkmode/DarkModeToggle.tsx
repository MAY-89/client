import { Switch } from "antd";
import React, { useState } from "react";
import { ThemeContext, themes } from "../../hook/theme/ThemeContext";

function DarkModeToggle() {
  const [current, setCurrent] = useState("1");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <Switch
            checked={darkMode === true}
            onChange={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode === true ? themes.light : themes.dark);
            }}
          ></Switch>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default DarkModeToggle;
