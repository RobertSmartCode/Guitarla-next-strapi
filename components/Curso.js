// import Imagen from 'next/imagen'

const Curso = ({cursos}) => {

    const {titulo, contenido, imagenes}= cursos
    return (
        <section>
            <div className="contenedor" >
                <div>
                    <h2>{titulo}</h2>
                    <p>{contenido}</p>
                    <a href="#" >Mas Informacion</a>
                </div>

            </div>
          
        </section>
    )
}

export default Curso
