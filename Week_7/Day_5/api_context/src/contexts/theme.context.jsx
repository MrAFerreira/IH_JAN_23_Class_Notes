import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeWrapper(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeWrapper };
