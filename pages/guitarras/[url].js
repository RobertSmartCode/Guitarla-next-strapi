
import Image from 'next/image'
import styles from '../../styles/Guitarra.module.css'
import Layout from '../../components/Layout'

const Producto = ({guitarra}) => {

    const {descripcion, imagen, nombre, precio, url} = guitarra[0]

    return (
      <Layout
      pagina= {`Guitarra ${nombre}`}
      >
            <div className={styles.guitarra} >
                    <Image
                        priority="true"
                        layout="responsive"
                        src={imagen.url}
                        width={180}
                        height={350}
                        alt={`Imagen guitarra ${nombre}`}
                    />
                    <div className={styles.contenido} >  
                        <h3>{nombre}</h3>
                        <p className={styles.descripcion} >{descripcion}</p>
                        <p className={styles.precio} >${precio}</p>
                    </div>
            </div>
      </Layout>

    )
}
export async function getServerSideProps({query : {url}}){

    const urlGuitarra=`${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    console.log(guitarra[0]);

    return {
        props:{
        guitarra
        }
      }
}
export default Producto
