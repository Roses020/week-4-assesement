let goalArr = ["learn to code","drink more water","learn a new language","buy a house","exercise more"];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },
    
    getGoals: (req, res) => {
        let randomIndex = Math.floor(Math.random() * goalArr.length);
        let randomGoal = goalArr[randomIndex];
        res.status(200).send(randomGoal);
    },

    addGoal: (req, res) => {
        let { goal } = req.body
        goalArr.push(goal)
        res.status(200).send('the goal: ' + goal + ' was successfully submitted\n' + 'all goals: ' + goalArr );
    },

    updateGoal: (req, res) => {
     let { newGoal, oldGoal } = req.body
        for(let i = 0; i < goalArr.length; i++){
            if(goalArr[i] === oldGoal){
                goalArr[i] = newGoal
            }
        }
     res.status(200).send('the new goal: ' + newGoal + ' was succesfully Updated \nAll goals: ' + goalArr)
    },

    deleteGoal: (req, res) => {
        let { goal } = req.params

        for(let i = 0; i < goalArr.length; i++){
            if(goalArr[i] === goal){
                goalArr.splice(i,1)
            }
        }

        res.status(200).send('The goal: ' + goal + ' has been deleted.\n ' + 'all goals: ' + goalArr)
    }
}