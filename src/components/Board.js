import { useSelector } from "react-redux";

const Board = () => {
  const info = useSelector((state) => state.task);
  return (
    <div>
      {info.map((item, index) => (
        <div key={index}>
          <p>{`key:  ${index}`}</p>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.priority ? "Prioridad alta" : "Prioridad baja"}</p>
        </div>
      ))}
    </div>
  );
};

export default Board;
