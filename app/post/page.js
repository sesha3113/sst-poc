const Posts = async ()  =>  {
  const response = await fetch(
    "https://test-js-files.s3.ap-south-1.amazonaws.com/test.json"
  );

  const data = await response.json();

  console.log("data", data);
  return (
    <>
      <h1>List of Posts</h1>{" "}
      {data.map((post) => {
        return (
          <div key={post.id}>
            <h2>
              {post.id} {post.name}
            </h2>
          </div>
        );
      })}
      {Date()}
    </>
  );
}

export default Posts;

export const revalidate = 60;