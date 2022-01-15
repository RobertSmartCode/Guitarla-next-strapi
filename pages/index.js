import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'

export default function Home({guitarras, cursos}) {

  return (

    <Layout
    pagina='Inicio'
    >
      <main className='contenedor' >
      <h1 className='heading' >Nuestra Colecion</h1>
      <Listado
        guitarras={guitarras}
        />
      </main>
   
    <Curso
    cursos= {cursos}
    
    />
    </Layout>
    
  )

}

export async function getServerSideProps(){

  const urlGuitarras= `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`

  const [resGuitarras, resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos)
  ])

  const [guitarras, cursos] = await Promise.all([
    resGuitarras.json(),
    resCursos.json()
    
  ])

  
 return {
     props:{
     guitarras,
     cursos
     }
   }
}
