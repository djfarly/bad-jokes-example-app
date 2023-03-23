import JokeList from "../components/JokeList";
import useSWR from "swr";

export default function HomePage() {
  const { data } = useSWR("/api/jokes");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return <JokeList jokes={data} />;
}
