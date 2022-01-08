import React from "react";
import Input from "./Input";
import Show from "./Show";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
const Todos = () => {
  const Todos = useSelector((state) => state.Todos);
  return (
    <>
      <Input key={uuidv4()} />
      {Todos.map((item) => (
        <>
          <Show check={item.complete} key={item.id} id={item.id} title={item.title} desc={item.description} status={item.status} />
        </>
      ))}
    </>
  );
};

export default Todos;