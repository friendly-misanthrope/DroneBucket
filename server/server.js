const express = require("express");
const app = express();
const cors = require('cors');

require("./config/mongoose.config"); // calling the mongoose.config and running the connect function
const cookieParser = require('cookie-parser')
require('dotenv').config();
app.use(cors({credentials:true, origin:'http://localhost:3000'}));

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser())

// update routes
const DroneRoutes = require('./routes/drone.routes');
DroneRoutes(app);

const UserRoutes = require('./routes/user.routes')
UserRoutes(app)

app.listen(8000, () => console.log("The server is all fired up on port 8000"));