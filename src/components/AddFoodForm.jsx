import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleNameInput = (event) => setName(event.target.value);
  const handleImageInput = (event) => setImage(event.target.value);
  const handleCaloriesInput = (event) => setCalories(event.target.value);
  const handleServingsInput = (event) => setServings(event.target.value);

  const resetInputs = () => {
    setName("");
    setImage("");
    setCalories(0);
    setServings(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name,
      image,
      calories,
      servings,
      /* id: crypto.randomUUID(), */
    };
    props.addFoodForm(newFood);

    resetInputs();
  };

  return (
    <div className="AddFood">
      <form onSubmit={handleSubmit}>
        <h1>Add Food Entry</h1>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </div>
        <div>
          <label htmlFor="Image">Image: </label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleImageInput}
          />
        </div>
        <div>
          <label htmlFor="Calories">Calories: </label>
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </div>
        <div>
          <label htmlFor="Servings">Servings: </label>
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default AddFoodForm;
