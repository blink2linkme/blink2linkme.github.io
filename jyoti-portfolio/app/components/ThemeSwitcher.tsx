import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme</button>
    );
}