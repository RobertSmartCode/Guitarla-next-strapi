import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
      <Layout
      pagina= 'Nosotros'
      >
        <main className='contenedor' >

          <h2 className='heading' >Nosotros</h2>

          <div className={styles.contenido} >

              <Image
              layout="responsive"
                  src="/img/nosotros.jpg "
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

export default Nosotros
