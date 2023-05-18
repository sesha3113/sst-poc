export default async function handler(req, res) {
  console.log("API reval")
  await res.revalidate("/post");
  return res.json({ revalidated: true });
}
