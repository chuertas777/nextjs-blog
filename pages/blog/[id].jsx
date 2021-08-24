import Layout from '../../components/layout';


export default function firstpost({ data }) {
    return (
        <Layout
            title="Mi primer post"
            description="Todos mis posts"
        >
                <h1>
                    {data.id} - {data.title}
                </h1>
                <p>{data.body}</p>
        </Layout>
    );
}
export async function getStaticPaths() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      const paths = data.map((post) => ({ params: { id: post.id.toString() } }));
      
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
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id);
      const data = await res.json();
      
      return { props: { data } };
    } catch (error) {
      console.log(error);
    }
  }