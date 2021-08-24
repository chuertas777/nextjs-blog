import Layout from '../../components/layout';
import Link from 'next/link';

export default function index({ data }) {
    return (
        <Layout
           title="Lista de equipos"
           description="Descripción de equipos"
        >
            <h1>Lista Blog</h1>
            {data.map(({ id, placa, modelo, serial, descripcion }) => (
                    <div key={id}>
                        <h3>
                            <Link href={`/blog/${id}`}>
                                <a>
                                    {id} - {placa}
                                </a>
                            </Link>
                        </h3>
                        <p>{modelo}</p>
                        <p>{serial}</p>
                        <p>{descripcion}</p>
                    </div>
            ))} 
        </Layout>

    );
}

export async function getStaticProps() {
    try {
      const res = await fetch('http://localhost:1337/equipos');
      const data = await res.json();
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.log(error);
    }
  }
