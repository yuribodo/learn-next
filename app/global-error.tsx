"use client";

export default function GlobalError({error,}: {error: Error & {digest?: string};}) {
    return (
        <html>
            <body>
                <h2>Global error</h2>
            </body>
        </html>
    );
}