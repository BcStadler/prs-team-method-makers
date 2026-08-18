import { useState, useEffect } from "react";
import { IUser } from "./IUser";
import { userAPI } from "./UserAPI";
import UserCard from "./UserCard";
import toast from "react-hot-toast";

function UserList() {
  const [users, setUsers] = useState<IUser[]>([]);

  async function loadUsers() {
    try {
      const data = await userAPI.list();
      setUsers(data);
    } catch (error: any) {
      toast.error(error.message, { duration: 6000 });
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function removeUser(user: IUser) {
    setUsers(users.filter((u) => u.id !== user.id));
  }

  return (
    <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onRemove={removeUser} />
      ))}
    </section>
  );
}

export default UserList;
