import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'

const NoEncontrado = () => {
    return (
      
       <div className={styles.NoEncontrado}>
       <h1 className='heading' >Pagina no encontrada</h1>
            <Link href="/">
                <a className={styles.enlace} >
                Volver al Inicio
                </a>
                
                </Link>
       </div>
    )
}

export default NoEncontrado
