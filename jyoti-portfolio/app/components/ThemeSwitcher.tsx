import { useTheme } from "../context/ThemeContextClient";

export default function ThemeSwitcher() {
    const { isDarkTheme, toggleTheme } = useTheme();
    console.log(isDarkTheme);
    return (
        <button onClick={toggleTheme}>Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme</button>
    );
}