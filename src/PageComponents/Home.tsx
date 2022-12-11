import "Styles/users.scss";

import React, { FC, useEffect, useState } from "react";

import UserCard from "Components/UserCard";

import { getUsers } from "Services/Users";
import { UserInterface } from "Interfaces/User";
import { useAppDispatch } from "Store/hooks";
import { setUsers as setUsersInRedux } from "Store/userSlice";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
      dispatch(setUsersInRedux(res.data));
    });
  }, []);

  return (
    <div className="user-cards">
      {users.map((user: UserInterface) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Home;
