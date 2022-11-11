let goalArr = [];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
        
        
        
        
    },
    
    getFortune: (req, res) => {
        const fortunes = ["A pleasant surprise is waiting for you!", "Bide your time, for success is near!", "Courtesy is contagious!", "Do not make extra work for yourself!", "Education is the ability to meet life’s situations!."];
        
        
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
        
    },

    addGoal: (req, res) => {
        //console.log(req.body)
        let { goal } = req.body
        goalArr.push(goal)
        res.status(200).send('the goal: ' + goal + ' was successfully submitted\n' + 'all goals: ' + goalArr );
    }
    
}



