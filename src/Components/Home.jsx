import React from "react";
export default function Home() {
  const imageURL =
    "https://i.pinimg.com/564x/60/f6/97/60f697b351e6078e7e7d4dd9023e890c.jpg";
  return (
    <div className="Home">
      <h1> Welcome to Book Advanture! </h1>
      <h3>Book Advanture is a fun, free way to motivate you to read! </h3>
      <img src={imageURL} />
    </div>
  );
}
