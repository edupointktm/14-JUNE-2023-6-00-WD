import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setData(data));
 }, []);

  return (
    <>
    {data.map((d)=>
    <img src={d.image} width = "25%" alt="" />
    )}
    </>
  );
};

export default App