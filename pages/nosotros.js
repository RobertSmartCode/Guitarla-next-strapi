import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = ({nosotros}) => {
  const {imagen} = nosotros
    return (
      <Layout
      pagina= 'Nosotros'
      >
        <main className='contenedor' >

          <h2 className='heading' >Nosotros</h2>

          <div className={styles.contenido} >
                    <Image
                        priority="true"
                        layout="responsive"
                        src={imagen.url}
                        width={600}
                        height={450}
                        alt="imagen sobre nosotros"
                    />
            
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ipsum luctus, pellentesque velit eget, scelerisque urna. Proin at aliquam quam, eleifend malesuada dui. Nam ex nunc, interdum rutrum enim ut, interdum dictum odio. Nunc purus dui, vehicula id massa sit amet, accumsan dignissim ipsum. Integer ullamcorper imperdiet faucibus. Curabitur feugiat porta ultricies. Nulla ante felis, efficitur sit amet justo eu, tincidunt consequat massa.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ipsum luctus, pellentesque velit eget, scelerisque urna. Proin at aliquam quam, eleifend malesuada dui. Nam ex nunc, interdum rutrum enim ut, interdum dictum odio. Nunc purus dui, vehicula id massa sit amet, accumsan dignissim ipsum. Integer ullamcorper imperdiet faucibus. Curabitur feugiat porta ultricies. Nulla ante felis, efficitur sit amet justo eu, tincidunt consequat massa.
                      
                    </p>
            </div>
          </div>

        </main>
     
      </Layout>
    )
}
export async function getServerSideProps(){

  const urlNosotros=`${process.env.API_URL}/nosotros?`
  const respuesta = await fetch(urlNosotros)
  const nosotros = await respuesta.json()

  console.log(nosotros);

  return {
      props:{
        nosotros
      }
    }
}

export default Nosotros
