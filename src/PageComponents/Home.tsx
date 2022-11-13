import { ReactNode } from "react";

const Home = () => {
  const sum = () => {
    return 10 + 2;
  };
  return <div>Home page {sum()}</div>;
};

export default Home;
