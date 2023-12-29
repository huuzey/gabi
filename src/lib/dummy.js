import React from "react";

const dummy = async () => {
  const response = await fetch("https://dummyjson.com/");
  const datas = await response.json();
  console.log(datas);
  return datas;
};

export default dummy;
