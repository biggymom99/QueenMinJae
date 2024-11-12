import { useState } from "react";

export default function ToggleButton(){

    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    const newMode=!darkMode;
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <ToggleButton darkMode={darkMode} onClick={toggleDarkMode}>
        {darkMode ? "라이트 모드" : "다크 모드"}
      </ToggleButton>
      <h1>🌙</h1>
      <p>이 텍스트는 다크 모드와 라이트 모드에 따라 색상이 변경됩니다.</p>
    </>
  );

}


