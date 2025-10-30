import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  const users = {
    1: { name: "Alice Johnson", age: 25, city: "New York" },
    2: { name: "Bob Smith", age: 30, city: "London" },
  };

  const user = users[id];

  if (!user) {
    return <h2>❌ User not found!</h2>;
  }

  return (
    <div>
      <h2>👤 User Details</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>City:</strong> {user.city}</p>
    </div>
  );
}

export default User;
