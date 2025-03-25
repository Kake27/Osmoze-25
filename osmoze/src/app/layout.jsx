// "use client";
// import { Geist, Geist_Mono, Modern_Antiqua, Merriweather } from "next/font/google";
// import { Risque } from "next/font/google";
// import { usePathname } from "next/navigation";
// import "../styles/globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const risque = Risque({ subsets: ["latin"], weight: "400" });

// const modernAntiqua = Modern_Antiqua({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-modern-antiqua",
// });

// const merriweather = Merriweather({
//   weight: ["300", "400", "700", "900"],
//   subsets: ["latin"],
//   variable: "--font-merriweather",
// });
// export const metadata = {
//   title: "Osmoze",
//   description: "Welcome to Osmoze'25!",
//   icons: {
//     icon: "/OsmozeLogo.png", // ✅ Use the correct path
//     shortcut: "/OsmozeLogo.png",
//     apple: "/OsmozeLogo.png",
//   },
// };

// export default function RootLayout({ children }) {
//   const pathname = usePathname()
//   const dashboard = pathname === "/dashboard";

//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" href="/OsmozeLogo.png" sizes="any" />
//         <link rel="apple-touch-icon" href="/OsmozeLogo.png" />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${modernAntiqua.variable} ${merriweather.variable} antialiased`}
//       >
//         {!dashboard && <Navbar />}
//         {children}
//         {!dashboard && <Footer />}
        
//       </body>
//     </html>
//   );
// }


import { Geist, Geist_Mono, Modern_Antiqua, Merriweather } from "next/font/google";
import { Risque } from "next/font/google";
import "../styles/globals.css";
import LayoutWrapper from "./components/LayoutWrapper"; // Import the wrapper

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const risque = Risque({ subsets: ["latin"], weight: "400" });
const modernAntiqua = Modern_Antiqua({ weight: "400", subsets: ["latin"], variable: "--font-modern-antiqua" });
const merriweather = Merriweather({ weight: ["300", "400", "700", "900"], subsets: ["latin"], variable: "--font-merriweather" });

export const metadata = {
  title: "Osmoze'25",
  description: "Welcome to Osmoze'25!",
  icons: {
    icon: "/osmoze-favicon.ico",  // ✅ Correct path for favicon
    shortcut: "/osmoze-favicon.ico",
    apple: "/osmoze-favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Ensuring favicon is linked properly */}
        <link rel="icon" href="/osmoze-favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/osmoze-favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${modernAntiqua.variable} ${merriweather.variable} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
