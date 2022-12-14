const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getGoals, addGoal, updateGoal, deleteGoal } = require('./controller');

app.get("/api/compliment", getCompliment);

app.get("/api/goals", getGoals);

app.post("/api/addgoal", addGoal);

app.put("/api/updateGoal", updateGoal);

app.delete("/api/deleteGoal/:goal", deleteGoal);

app.listen(4000, () => console.log("Server running on 4000"));