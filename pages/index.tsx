import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 max-w-xl mx-auto">
        <button className="btn btn-accent btn-xs">{`😎`}</button>
        <button className="btn btn-accent btn-sm">{`average`}</button>
        <button className="btn btn-accent">{`medium`}</button>
        <button className="btn btn-accent btn-lg">{`large`}</button>

        <button className="btn btn-primary btn-outline">{`Two`}</button>
        <button className="btn btn-accent">{`three`}</button>
      </div>
    </div>
  );
};

export default Home;
