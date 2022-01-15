import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina, guitarra}) => {
    return (
        <div>
            <Head>
                <title>GuitarLA -{pagina}</title>
                <meta name= "Sitio web de ventas de guitarra"/>
                @import url(https://fonts.googleapis.com);
                @import url(https://fonts.gstatic.com);
                @import url(https://fonts.googleapis.com/css2?
                family=Outfit:wght@400;700;900&display=swap);
            </Head>
                  

            <Header 
              guitarra={guitarra}
            
            />

            {children}

            <Footer />
        </div>
    )
}

Layout.defaultProps={
    guitarra:null
}

export default Layout
