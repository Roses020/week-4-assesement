const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
   axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });

};

fortuneBtn.addEventListener('click', getFortune)


const addGoal = () => {
    let body = {
        goal: document.getElementById("userInput").value
    }
    axios.post("http://localhost:4000/api/addGoal/", body)
    .then(res => {
        //displayGoal(res.data)
        //const data = res.data;
        alert(res.data);
    });
    
};

const addGoalButton = document.getElementById("addGoal")
addGoalButton.addEventListener('click', addGoal)
