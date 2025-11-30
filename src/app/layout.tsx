import './globals.css';

export const metadata = {
  title: 'Selin Ventures',
  description: 'Gemini-style UI built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/lucide@latest"></script>
      </head>
      <body className="font-sans selection:bg-[#F4D06F] selection:text-black bg-black text-white">
        {children}
      </body>
    </html>
  );
}
