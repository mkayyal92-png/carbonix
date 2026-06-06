import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body style={{ margin: 0, background: "#0A0A0A", color: "white" }}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
