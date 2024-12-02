import { useState, useEffect } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Add or remove the dark mode class from the body element
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="dark-mode-toggle">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`toggle-button ${darkMode ? "dark" : "light"}`}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
