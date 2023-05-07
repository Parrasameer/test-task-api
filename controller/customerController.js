
const customers = [
  {
    "name": "Haris",
    "age": 39,
    "sex": "M",
    "mobile": 9906123046,
    "address": "Noida",
    "IDtype": "Aadhar",
    "govtId": 3457200987612,
    "guardian": "father",
    "guardianDetails": "Gulzar Bhat",
    "nationality": "Indian",
    "city": "Delhi",
    "pincode": 19000234
  },
  {
    "name": "Saniya",
    "age": 22,
    "sex": "F",
    "mobile": 7006723006,
    "address": "Banglore",
    "IDtype": "PAN",
    "govtId": "ABJIP0965R",
    "guardian": "father",
    "guardianDetails": "Syed Fazil",
    "nationality": "Indian",
    "city": "Tamil Nadu",
    "pincode": 1870234
  },
  {
    "name": "Vicky",
    "age": 28,
    "sex": "M",
    "mobile": 9906908226,
    "address": "Jammu",
    "IDtype": "Aadhar",
    "govtId": 980078432109,
    "guardian": "father",
    "guardianDetails": "Rohit Khusla",
    "nationality": "Indian",
    "city": "Jammu",
    "pincode": 19004
  }

];

module.exports.get = (req, res) => {
  const page = req.params.page;
  const obj = {
    "records": customers.slice((page - 1) * 100, 100 * page),

    "totalCount": customers.length
  }
  res.status(200).send(obj);
}

module.exports.getByName = (req, res) => {
  const name = req.params.name;
  const result = customers.find(c => c.name == name);
  if (!result) {
    return res.status(404).send();
  }
  return res.status(200).send(result);
}

module.exports.add = (req, res) => {
  const customer = req.body;
  customers.push(customer);
  res.status(200).send(customers);
}


module.exports.getAll = (req, res) => {

  res.status(200).send(customers);
}


module.exports.update = (req, res) => {
  const customer = req.body;
  let foundCustomerIndex = customers.findIndex(c => c._id == customer._id);
  console.log(foundCustomerIndex);
  console.log(customer);
  customers[foundCustomerIndex] = customer;
  res.status(200).send(customers);
}

module.exports.delete = (req, res) => {
  const name = req.params.name;
  let foundCustomerIndex = customers.findIndex(c => c.name == name);
  customers.splice(foundCustomerIndex, 1);
  console.log(customers);
  res.status(200).send(customers);
}

