import express from "express";
import cors from "cors";
import axios from "axios";


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
        const result = await axios.put(
          "https://api.chatengine.io/users/",
          {username:username , secret:username , first_name:username},
         {headers: {"private-key":"dae6b5e5-0f0e-432a-b0b3-f1a1a4d26c1b"}}
        );
        return res.status(result.status).json(result.data);
  }
  catch (error){
       return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3001,()=>{
    console.log("server is running on 3001");
});
