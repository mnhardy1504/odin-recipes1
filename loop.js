"mydata":
{
    "name": "Fred Flintstone", 
    "age": 1053, 
    "tags": ["one","two","three"],
    "balls": [
        {
            "color": "red",
            "weight": 12,
            "nickname": "ruby"

        }, 
        {   
            "color": "blue",
            "weight": 15,
            "nickname": "royal"
        }
    ]
}
for (tag in tags) {
    console.log(tag);
}

for (ball in balls) {
    console.log(ball.color);
    console.log(ball.weight);
}

for (key in mydata) {
    console.log(mydata[key]);
}


