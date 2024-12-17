import { Inter } from "next/font/google";
import { Providers } from "@/src/providers";
import { bodyThemeColors } from "@/src/lib/myutils";
import "./globals.css";
import "./fonts.css";

const inter = Inter({ subsets: ["latin"] });
const metadata = {
    title: "DNetHub",
    description: "The convergence of your Web3 and Web2 identities.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/603px-Reddot.svg.png?20140718195605",
    url: `https://hbar.im`,
    sitename: "dnethub",
};

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning lang="en">
            {/* <link rel="shortcut icon" href="/favico.png" />
          <link rel="icon" href="/favico.png" /> */}
            <meta name="description" content={metadata.description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={metadata.title} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:image" content={metadata.image} />
            <meta property="og:url" content={metadata.url} />
            <meta property="og:site_name" content={metadata.sitename} />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:description" content={metadata.description} />
            <meta name="twitter:image" content={metadata.image} />

            {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap" rel="stylesheet"></link> */}

            <title>{metadata.title}</title>
            <body className={inter.className}>
                <Providers>
                    <div className={bodyThemeColors}>{children}</div>
                </Providers>
            </body>
        </html>
    );
}
