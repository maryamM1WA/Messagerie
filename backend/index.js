const express = require("express");
const cors = require("cors");
const Axios = require("axios"); 

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

try{
    const r= await Axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers:{"private-key":"3e678dd8-26dd-407f-be33-b2d800e13b98"}}
    );
    return res.status(r.status).json(r.data);
} catch(e){
    return res.status(e.response.status).json(e.response.data);
}

});

app.listen(3001);