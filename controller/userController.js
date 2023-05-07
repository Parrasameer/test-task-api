
const users = [
    {
        "name": "SAMEER",
        "username": "sameer123",
        "password": "sameer",
        "email": "sameer@gmail.com",
        "isActive": true
    },
    {
        "name": "David Doe",
        "username": "david.doe",
        "password": "Password1",
        "email": "david.doe@gmail.com",
        "isActive": false
    }
];

module.exports.getAll = (req, res) => {
    res.status(200).send(users);
}

module.exports.signup = (req, res) => {
    let user = req.body;
    if (!user.email || !user.password) {
        return res.status(400).send("Email and Password is required");
    }
    users.push(req.body);
    return res.status(200).send();
}

module.exports.signin = (req, res) => {
    let user = req.body;
    if (!user.email || !user.password) {
        return res.status(400).send("Email and Password is required");
    }
    let foundUser = users.find(i => i.email == user.email && i.password == user.password);
    if (!foundUser) {
        return res.status(400).send("Email or Password is incorrect");
    } else {
        return res.status(200).send();
    }
}

module.exports.activate = (req, res) => {
    const name = req.params.username;
    let foundUserIndex = users.findIndex(c => c.username == name);
    users[foundUserIndex].isActive = true;
    res.status(200).send(users);
}

module.exports.deActivate = (req, res) => {
    const name = req.params.username;
    let foundUserIndex = users.findIndex(c => c.username == name);
    users[foundUserIndex].isActive = false;
    res.status(200).send(users);
}
