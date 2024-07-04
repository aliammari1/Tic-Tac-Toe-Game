import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "../components/themeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/**
 * @description Takes a single child parameter, which is used to render the HTML body
 * element with a custom class name.
 *
 * @param {Readonly<{
 *   children: React.ReactNode;
 * }>} .children - React node to be rendered inside the `RootLayout` component.
 *
 * @returns {HTML document} an HTML document containing the provided children content
 * within a `<body>` element with a class named `inter.className`.
 *
 * 	* `html`: This represents the HTML element that contains the content provided as
 * `children`.
 * 	* `lang`: This property is an attribute of the HTML element and specifies the
 * language of the content. In this case, it is set to "en".
 * 	* `body`: This property represents the BODY element of the HTML document. The
 * content provided as `children` is rendered within this element.
 * 	* `className`: This property represents the class attribute of the BODY element
 * and specifies a value for the `inter.className` prop passed to the `RootLayout` function.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
