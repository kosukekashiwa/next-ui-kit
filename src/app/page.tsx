import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <div>Start</div>
      <div style={{ border: "1px solid red", height: 1200 }}>
        Menu breakpoint is 960px.
      </div>
      <div>End</div>
    </div>
  );
};

export default Home;
