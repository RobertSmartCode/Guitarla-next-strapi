import Head from 'next/head'
import Header from './Header'

const Layout = ({children, pagina}) => {
    return (
        <div>
            <Head>
                <title>GuitarLA -{pagina}</title>
                <meta name= "Sitio web de ventas de guitarra"/>
            </Head>


            <Header />

            {children}
        </div>
    )
}

export default Layout
