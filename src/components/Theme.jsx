import { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center justify-between px-2 py-2">
      <span className="text-sm">Dark Mode</span>
      <input
        type="checkbox"
        className="toggle toggle-sm"
        checked={theme === "dark"}
        onChange={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
      />
    </div>
  );
};

export default Theme;
