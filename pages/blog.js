import { getSession } from "next-auth/react";

function Blog({ data }) {
  console.log(data);
  return <h1>Blog Page {data}</h1>;
}

export default Blog;

export async function getServerSideProps(content) {
  const session = await getSession(content);
  console.log(session);
  return {
    props: {
      data: session ? "List of 100 perzonalized blogs" : "List off free blogs",
    },
  };
}
