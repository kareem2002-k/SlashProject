import pkg from "@material-tailwind/react";

export function ThemeProvider({ children }) {
  return <pkg.ThemeProvider>{children}</pkg.ThemeProvider>;
}

export default ThemeProvider;
