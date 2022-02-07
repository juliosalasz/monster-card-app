import Card from "../card-component/card-component";
import "./card-list.components.css";
const Cardlist = function (props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
export default Cardlist;
