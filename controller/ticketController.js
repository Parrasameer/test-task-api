
const tickets = [
    {
        "customer":"PRISMATIC",
        "desc":"Can't load my invoices",
        "status":"Assigned",
        "assignedTo":"Admin User",
        "raisedOn":"01/02/2022"
    },
    {
        "customer":"ZOUNDS",
        "desc":"Page is not loading",
        "status":"In Progress",
        "assignedTo":"Admin User",
        "raisedOn":"02/02/2022"
    }
];

module.exports.get = (req,res)=>{
    res.status(200).send(tickets);
}

module.exports.getByDesc = (req,res)=>{
    const desc = req.params.desc;
    const result = tickets.find(t=> t.desc==desc);
    return res.send(result);
}

module.exports.add = (req, res)=>{
    const ticket = req.body;
    tickets.push(ticket);
    res.status(200).send(tickets);
}

module.exports.update = (req, res)=>{
    const ticket = req.body;
    let foundTicketIndex = tickets.findIndex(t=> t.customer==ticket.customer && t.raisedOn==ticket.raisedOn);
    tickets[foundTicketIndex]=ticket;
    res.status(200).send(tickets);
}