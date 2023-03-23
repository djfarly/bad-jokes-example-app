import Joke from "../components/Joke";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function JokeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/jokes/${id}` : null);

  if (error) {
    console.dir(error);
    return <h1>An error occured… ({error.info.status})</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return <Joke joke={data} />;
}
