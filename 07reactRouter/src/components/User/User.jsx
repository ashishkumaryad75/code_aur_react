import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl text-center p-4">
      User : {userId}
    </div>
  );
}
