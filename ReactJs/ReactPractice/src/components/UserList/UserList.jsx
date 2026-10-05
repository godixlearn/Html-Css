import { useEffect, useState } from "react";
import User from "../User/User";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson12.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setIsError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>It's Loading....</div>;
  }
  if (isError) {
    return <div>Something went wrong while fetching users.</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} users={user} />
      ))}
    </div>
  );
}

export default UserList;
