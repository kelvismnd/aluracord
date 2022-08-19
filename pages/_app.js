import GlobalStyle from "../global/GlobalStyle"

export default function MyApp({ Component, pageProps }) {
    console.log('Roda em todas as paginas')
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />

        </>
    )
}