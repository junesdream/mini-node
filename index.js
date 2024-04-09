const express = require("express");
var cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());


app.get("/", (req, res) => {
	res.send("Hello World!");
});

// app.get("/user/:id", (req, res) => {

//     const q = req.params
//     console.log(q);
//     const q = req.query;
//     console.log(q);

// 	    res.send({ 'userid': q.id});
// });

app.get("/sound/:name", (req, res) => {
    const {  name } = req.params;
    
    if(name == "dog") {
        res.send({
			sound: "woofwoof",
			img: "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=400",
		});
    } else if (name == "cat") {
        res.send({
			sound: "meowmeow",
			img: "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=400",
		});
    } else if (name == "cow") {
        res.send({
			sound: "moomoo",
			img: "https://images.pexels.com/photos/18400788/pexels-photo-18400788/free-photo-of-feld-landschaft-landwirtschaft-bauernhof.jpeg?auto=compress&cs=tinysrgb&w=400",
		});
    } else if (name == "pig") {
        res.send({
			sound: "oinkoink",
			img: "https://images.pexels.com/photos/5610055/pexels-photo-5610055.jpeg?auto=compress&cs=tinysrgb&w=400",
		});
    } else {
        res.send({
			sound: "unknown",
			img: "https://images.pexels.com/photos/1563005/pexels-photo-1563005.jpeg?auto=compress&cs=tinysrgb&w=400",
		});
    }
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});