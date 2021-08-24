import Layout from '../../components/layout';


export default function firstpost({ data }) {
    return (
        <Layout
            title="Mi primer post"
            description="Todos mis posts"
        >
                <h1>
                    {data.id} - {data.placa}
                </h1>
                <p>{data.modelo}</p>
                <p>{data.serial}</p>
                <p>{data.descripcion}</p>
        </Layout>
    );
}
export async function getStaticPaths() {
    try {
      const res = await fetch('http://localhost:1337/equipos');
      const data = await res.json();
      const paths = data.map((equipo) => ({ params: { id: equipo.id.toString() } }));
      
      return {
        paths,
        fallback: false,
      };
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function getStaticProps({ params }) {
    try {
      const res = await fetch("http://localhost:1337/equipos/" + params.id);
      const data = await res.json();
      
      return { props: { data} };
    } catch (error) {
      console.log(error);
    }
  }