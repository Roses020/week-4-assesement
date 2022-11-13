const complimentBtn = document.getElementById("complimentButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getGoalBtn = document.getElementById("getGoalButton")

const getGoals = () => {
   axios.get("http://localhost:4000/api/goals/")
        .then(res => {
            const data = res.data;
            alert(data);
    });

};

getGoalBtn.addEventListener('click', getGoals)

const addGoal = () => {
    let body = {
        goal: document.getElementById("userInput").value
    }
    axios.post("http://localhost:4000/api/addGoal/", body)
    .then(res => {
        alert(res.data);
    });
    
};

const addGoalButton = document.getElementById("addGoal")
addGoalButton.addEventListener('click', addGoal)

const updateGoal = () => {
    let body = {
        newGoal: document.getElementById("userInput").value,
        oldGoal: document.getElementById("userInputGoal").value
    }
    axios.put("http://localhost:4000/api/updateGoal/", body)
    .then(res => {
        alert(res.data);
    });
    
};

const updateGoalBtn = document.getElementById("updateGoal")
updateGoalBtn.addEventListener('click', updateGoal)


const deleteGoal = () => {
    let goal = document.getElementById('userInputGoal').value
    axios.delete("http://localhost:4000/api/deleteGoal/" + goal)
    .then(res => {
        alert(res.data);
    });
}