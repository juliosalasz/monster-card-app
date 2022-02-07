import "./card-component.css";
const Card = function (props) {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      ></img>
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};
export default Card;
