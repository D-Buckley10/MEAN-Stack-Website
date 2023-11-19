const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET traveler view*/
const travel = (req, res) => {
    
    res.render('travel', {title: "Travlr Getaways - Travel", trips});
};

module.exports = {
    travel
}