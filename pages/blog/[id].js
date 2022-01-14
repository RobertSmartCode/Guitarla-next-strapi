import Image from 'next/image'
import Layout from '../../components/Layout'
import { useRouter } from "next/router" 
import {formatearFecha} from '../../helpers/index'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {    

    const {contenido, imagen, published_at, titulo}= entrada

console.log(entrada);
return (

      <Layout>
           <main>
                <h1 className="heading" >{titulo}</h1>
                <article className={styles.entrada} >
                <Image
                    priority="true"
                    layout="responsive"
                    src={imagen.url}
                    width={600}
                    height={450}
                    alt={`Imagen entrada ${titulo}`}
                />
               <div className={styles.contenido}>

               <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                <p className={styles.texto} >{contenido}</p>

               </div>
                </article>
           </main>
      </Layout>
    )
}

export async function getStaticPaths(){

    const url=`${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map(entrada => ({
        params: {id: entrada.id.toString()}
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params:{ id}}){

    const url=`${process.env.API_URL}/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    return {
        props:{
        entrada
        }
      }
}
// export async function getServerSideProps({query:{ id}}){

//      const url=`${process.env.API_URL}/blogs/${id}`
//     const respuesta = await fetch(url)
//     const entrada = await respuesta.json()

//     return {
//         props:{
//         entrada
//         }
//       }
// }


export default EntradaBlog
