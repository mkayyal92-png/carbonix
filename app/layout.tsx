export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body style={{ margin: 0, background: "#000" }}>
        {children}
      </body>
    </html>
  );
}
