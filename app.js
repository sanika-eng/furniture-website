const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config(); // Load environment variables
const User = require("./mongo"); // Ensure this path is correct

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.error("Failed to connect to MongoDB", error);
});

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the furniture website API");
});

app.post("/", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (error) {
        console.error(error);
        res.json("fail");
    }
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const newUser = new User({ email, password });

    try {
        const user = await User.findOne({ email });

        if (user) {
            res.json("exist");
        } else {
            await newUser.save();
            res.json("notexist");
        }
    } catch (error) {
        console.error(error);
        res.json("fail");
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
