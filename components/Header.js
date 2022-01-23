import Link from 'next/link'
import Image from 'next/image'
import { useRouter} from 'next/router'
import styles from '../styles/Header.module.css'

const Header = ({guitarra}) => {

    const router = useRouter();
  
    return (
        <header className={styles.header} >
            <div className="contenedor" >
                <div className={styles.barra} >
                    <Link href="/">
                            <a> {/* este div es porque next sino se queja */}
                                <Image
                                    src="/img/logo.svg"
                                    width={400}
                                    height={100}
                                    alt="image Logo"
                                />
                            </a>
                    </Link>
                    
                    <nav className={styles.navegacion}>
                        <Link href="/" >Inicio</Link>
                        <Link href="/nosotros" >Nosotros</Link>
                        <Link href="/blog" >Blog </Link>
                        <Link href="/tienda">Tienda</Link>
                    </nav>
                </div>
                {guitarra && (
                    <div className={styles.modelo} >
                        <h2>Modelo {guitarra.nombre}</h2>
                        <p>{guitarra.descripcion}</p>
                        <p className={styles.precio}>${guitarra.precio}</p>
                        <Link href={`/guitarras/${guitarra.url}`} >
                        <a className={styles.enlace}>
                            Ver Producto
                        </a>
                        </Link>
                    </div>
                )}
            </div> 
            {router.pathname === '/' &&(
                <div className={styles.guitarra}>
                    <Image layout='fixed' width={500} height={1200}  src= '/img/header_guitarra.png' alt='imagen header guitarra'/>
                </div>


            )}
        </header>
    )
}

export default Header
