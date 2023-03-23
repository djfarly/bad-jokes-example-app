import Link from "next/link";

export default function Joke({ joke }) {
  return (
    <>
      <small>ID: {joke.id}</small>
      <h1>{joke.joke} </h1>
      <Link href="/">Back to all</Link>
    </>
  );
}
