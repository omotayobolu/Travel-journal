import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Data from "./components/Data";

export default function App() {
  const details = Data.map((item) => {
    return <Main item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="journal-details">{details}</section>
    </div>
  );
}
