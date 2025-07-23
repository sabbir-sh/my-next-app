// app/layout.tsx
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Your Website Title",
  description: "Your Website Description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />       {/* Header added */}
        <main>{children}</main>
        <Footer />       {/* Footer added */}
      </body>
    </html>
  );
}
