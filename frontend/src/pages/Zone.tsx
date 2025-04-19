import { useParams } from "react-router-dom";

export default function Zone() {
  const { id } = useParams();
  return <h2 className="text-white text-2xl">🗺️ Zone {id}</h2>;
}
