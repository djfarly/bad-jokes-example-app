import { jokes } from "../../../lib/data";

export default function handler(request, response) {
  // Pseudocode: const jokes = database.get('jokes');
  response.status(200).json(jokes);
}
