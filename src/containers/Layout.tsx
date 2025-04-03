"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Session } from "next-auth";

interface LayoutProps {
    children: React.ReactNode;
    session: Session | null;
}

export default function Layout({ children, session }: LayoutProps) {
    return (
        <SessionProvider session={session}>
            <ToastContainer />
            <HeroUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="dark">
                    {children}
                </NextThemesProvider>
            </HeroUIProvider>
        </SessionProvider>
    );
}