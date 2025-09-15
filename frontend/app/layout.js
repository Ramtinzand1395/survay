import "./globals.css";

import localFont from "next/font/local";
const vazir = localFont({
  src: "./Vazir.woff2",
  display: "swap",
});

export const metadata = {
  title: "فرم نظر سنجی اردو تابستان",
  "description": "یک برنامه وب برای جمع آوری بازخورد و نظرات کاربران در مورد اردوی برگزار شده از طریق یک فرم نظرسنجی جامع.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" className={vazir.className}>
      <body>{children}</body>
    </html>
  );
}
