function Posts({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>{" "}
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>
              {post.id} {post.name}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default Posts;

export async function getStaticProps() {
  const response = await fetch(
    "https://test-js-files.s3.ap-south-1.amazonaws.com/test.json"
  );

  const data = await response.json();

  console.log("data", response);

  return {
    props: {
      posts: data,
    },

    revalidate: 60,
  };
}
