// "use client";

// import { ThemeProvider as NextThemes } from "next-themes";
// import { ReactNode } from "react";

// export function ThemeProvider({ children }: { children: ReactNode }) {
//   return (
//     <NextThemes attribute="class" defaultTheme="system" enableSystem>
//       {children}
//     </NextThemes>
//   );
// }

"use client";

import { ThemeProvider as NextThemes } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemes
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemes>
  );
}
