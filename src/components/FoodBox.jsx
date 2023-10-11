const FoodBox = ({
  food: { id, name, image, calories, servings },
  removeFood = () => {},
}) => {
  return (
    <div>
      <p>{name}</p>

      <img src={image} alt={id} style={{ height: "7rem" }} />

      <p>Calories: {calories} kcal</p>
      <p>Servings: {servings}</p>

      <p>
        <b>Total Calories: {servings * calories}</b>
        kcal
      </p>

      <button onClick={() => removeFood(id)}>Delete</button>
    </div>
  );
};

export default FoodBox;
