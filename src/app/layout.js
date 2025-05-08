import './globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head />
        <body>
        <div className="app-layout">
            <nav className="sidebar">
                <ul>
                    <li><a href="/">StreamList</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <main className="main-content">
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}