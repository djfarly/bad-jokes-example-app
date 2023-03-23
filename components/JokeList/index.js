import Link from "next/link";
import useSWR from "swr";

export default function JokeList() {
  const { data } = useSWR("https://example-apis.vercel.app/api/bad-jokes");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((joke) => (
        <li key={joke.id}>
          <Link href={`/${joke.id}`}>{joke.joke}</Link>
        </li>
      ))}
    </ul>
  );
}
