import Joke from "../components/Joke";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function JokeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(
    id ? `https://example-apis.vercel.app/api/bad-jokes/${id}` : null
  );

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return <Joke joke={data} />;
}
