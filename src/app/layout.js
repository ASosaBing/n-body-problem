import "./globals.css";




export const metadata = {
  title: "n-body problem",
  description: "A website simulating the n-body problem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`.relativePositioning`}>
          {children}
      </body>
    </html>
  );
}
