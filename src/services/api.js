export async function fetchProblemInfo({ problemId }) {
  const url = `http://localhost:8000/problem/${problemId.toString()}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export function XXX() {

}
