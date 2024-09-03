import Footer from "@/app/components/Footer";
import Header from "@/app/components/header";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
    );
}