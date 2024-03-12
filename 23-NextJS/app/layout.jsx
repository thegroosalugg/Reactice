import './globals.css'

// layout is another NextJS reserved file name, it defines the shell around one or more pages

// metadata is a reserved variable name. Requires an object structure. Replaces the <head> in HTML structure
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
