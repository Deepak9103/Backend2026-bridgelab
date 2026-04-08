import fs from "fs";
function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required!" });
        }
        if (!fs.existsSync("user.json")) {
            return res.status(404).json({ message: "No users found. Please register first." });
        }
        const users = JSON.parse(fs.readFileSync("user.json", "utf-8"));
         const isUser = users.find( const isUser = users.find(

