import { useParams } from "react-router";

export default function User() {
  const { userId } = useParams();
  return (
    <main>
      <h1>User ID: {userId}</h1>
    </main>
  );
}
