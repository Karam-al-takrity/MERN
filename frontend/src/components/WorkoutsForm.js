import { useState } from "react";
import useWorkoutsContext from "../hooks/useWorkoutsContext";
function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyfields, setEmptyFields] = useState([" "]);
  const philldata = [
    "Push-Up Challenge",
    "Squat Circuit",
    "Plank Hold",
    "Lunges Routine",
    "Burpees Blast",
    "Mountain Climbers",
    "Jumping Jacks",
    "High Knees",
    "Butt Kicks",
    "Tricep Dips",
    "Bicep Curls",
    "Shoulder Press",
    "Dumbbell Rows",
    "Chest Press",
    "Leg Press",
    "Deadlifts",
    "Crunches",
    "Russian Twists",
    "Bicycle Kicks",
    "Toe Touches",
    "Flutter Kicks",
    "Leg Raises",
    "Side Plank",
    "Reverse Crunches",
    "Hip Bridges",
    "Calf Raises",
    "Wall Sit",
    "Step-Ups",
    "Box Jumps",
    "Skaters",
    "Inchworms",
    "Superman",
    "Bird Dogs",
    "Donkey Kicks",
    "Fire Hydrants",
    "Side Lunges",
    "Curtsy Lunges",
    "Walking Lunges",
    "Glute Bridges",
    "Hamstring Curls",
    "Clamshells",
    "Pistol Squats",
    "Bulgarian Split Squats",
    "Sumo Squats",
    "Goblet Squats",
    "Single-Leg Deadlifts",
    "Seated Rows",
    "Lat Pulldowns",
    "Chest Flyes",
    "Cable Crossovers",
    "Arnold Press",
    "Front Raises",
    "Lateral Raises",
    "Upright Rows",
    "Bent Over Rows",
    "Face Pulls",
    "Pull-Ups",
    "Chin-Ups",
    "Leg Press Machine",
    "Smith Machine Squats",
    "Cable Tricep Extensions",
    "Cable Bicep Curls",
    "EZ Bar Curls",
    "Preacher Curls",
    "Hammer Curls",
    "Reverse Curls",
    "Skull Crushers",
    "Overhead Tricep Extensions",
    "Tricep Kickbacks",
    "Bench Press",
    "Incline Bench Press",
    "Decline Bench Press",
    "Dumbbell Flyes",
    "Chest Press Machine",
    "Pec Deck Flyes",
    "Cable Chest Press",
    "Hanging Leg Raises",
    "Hanging Knee Raises",
    "Captain's Chair Leg Raises",
    "Windshield Wipers",
    "V-Ups",
    "Plank with Shoulder Tap",
    "Plank with Leg Lift",
    "Side Plank with Hip Dip",
    "Side Plank with Leg Lift",
    "Starfish Crunches",
    "Scissor Kicks",
    "Side Bends",
    "Cable Woodchoppers",
    "Medicine Ball Slams",
    "Medicine Ball Russian Twists",
    "Battle Ropes",
    "Kettlebell Swings",
    "Kettlebell Goblet Squats",
    "Kettlebell Deadlifts",
    "Kettlebell Snatch",
    "Kettlebell Clean and Press",
    "Farmer's Walk",
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([""]);
      console.log("new workout added");
    }
  };

  const phill = () => {
    setLoad(Math.round(Math.random() * 49) + 50);
    setTitle(philldata[Math.round(Math.random() * 99)]);
    setReps(Math.round(Math.random() * 19) + 20);
  };

  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Excersise Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyfields.includes("title") ? "error" : " "}
        />

        <label>Load (kg):</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          className={emptyfields.includes("load") ? "error" : " "}
        />

        <label>Reps: </label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className={emptyfields.includes("reps") ? "error" : ""}
        />
        <button type="submit">Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
      <button onClick={phill} className="phill">
        Phill
      </button>
    </div>
  );
}

export default WorkoutForm;
