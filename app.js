const express = require('express');
const chalk = require("chalk");
const volleyball = require("volleyball");
const app = express();

app.use(volleyball);

// app.use(function(req,res,next){
//     console.log(chalk.blue (req.method), chalk.green(req.originalUrl), chalk.red(res.statusCode));
//     //console.log(Object.keys(req));
//     next();
// });

app.get('/', (req, res,next) => {
    res.send('Hello World!');
    next();
});

// app.use("/special/", (req,res,next)=> {
//     console.log(chalk.yellow("You have reached the Special Area"));
//     next();
// });

app.listen(3000, () => console.log(chalk.red("Example app listening on port 3000!")));