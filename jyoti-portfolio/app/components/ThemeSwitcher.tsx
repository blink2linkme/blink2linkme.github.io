import { useTheme } from "../context/ThemeContextClient";

export default function ThemeSwitcher() {
    const { isDarkTheme, toggleTheme } = useTheme();
    const dark = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 11.6014C3 16.7922 7.09519 21.0001 12.1469 21.0001C15.273 21.0001 18.0328 19.3887 19.6826 16.9301C20.3756 15.8974 20.7221 15.381 20.41 14.8411C20.0979 14.3012 19.3273 14.3541 17.7861 14.4599C10.8576 14.9353 8.58646 10.8359 8.23195 6.90293C8.066 5.0618 7.98302 4.14123 7.355 3.93743C6.72697 3.73363 6.26281 4.26556 5.3345 5.32941C3.8829 6.99296 3 9.19125 3 11.6014Z" stroke="black" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
    </svg>;

    const light = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="white" strokeWidth="1.6" className="my-path"></path>
        <path d="M12 3V5" stroke="white" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
        <path d="M12 19V21" stroke="white" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
        <path d="M18.3654 5.63623L16.9512 7.05044" stroke="white" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
        <path d="M7.05093 16.9497L5.63672 18.3639" stroke="white" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
        <path d="M18.3654 18.3644L16.9512 16.9502" stroke="white" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
        <path d="M7.05093 7.04996L5.63672 5.63574" stroke="white" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
        <path d="M21 12L19 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
        <path d="M5 12L3 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
    </svg>;
    return (
        // z-10 absolute top-0 left-1/2 transform -translate-x-1/2 p-2 border-solid 
        <button onClick={toggleTheme} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus:ring-gray-600 transition-all duration-500 hover:-translate-y-2">{isDarkTheme ? light : dark}</button>
    );
}