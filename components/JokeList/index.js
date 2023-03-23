import Link from "next/link";

export default function JokeList({ jokes }) {
  return (
    <ul>
      {jokes.map((joke) => (
        <li key={joke.id}>
          <Link href={`/${joke.id}`}>{joke.joke}</Link>
        </li>
      ))}
    </ul>
  );
}
