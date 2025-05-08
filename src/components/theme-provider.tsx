"use client";

import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { FC, PropsWithChildren } from "react";

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
