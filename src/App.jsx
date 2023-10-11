import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  /* console.log(FoodBox); */

  const [foodsData, setFoodsData] = useState(foodsJson);
  const addNewFood = (food) => {
    const updateFoods = [...foods, food];
    const updatedFoodsData = [...foodsData, food];

    setFoods(updateFoods);
    setFoodsData(updatedFoodsData);
  };

  function handleRemoveFood(id) {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <div>
        <AddFoodForm addFoodForm={addNewFood} />
      </div>
      {foods.map((food) => {
        return (
          <FoodBox
            key={`${food.id}`}
            food={food}
            removeFood={handleRemoveFood}
          />
        );
      })}
    </div>
  );
}

export default App;
