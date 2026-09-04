"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  enableSystem = true,
}: {
  children: ReactNode;
  defaultTheme?: string;
  enableSystem?: boolean;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={false}
      value={{
        dark: "dark",
        light: "light",
      }}
    >
      {children}
    </NextThemesProvider>
  );
}
