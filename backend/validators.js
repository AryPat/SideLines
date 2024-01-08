const { Line } = require("./models/model.js");

const check_json_req = (req, res) => {
  if (req.headers["content-type"] != "application/json") {
    res.status(400).json({ error: "Content-Type must be 'application/json'" });
    return false;
  }

  return true;
};

const check_attribute_exists = (attr) => {
  return attr in Line.getAttributes();
};

const json_validation = (body, res) => {
  valid = true;

  if ("order" in body) {
    body["order"].forEach((element) => {
      if (element.length !== 2) {
        res.status(400).json({
          error: "Order format is invalid! It should have exactly 2 elements.",
        });
        valid = false;
      } else if (!check_attribute_exists(element[0])) {
        res.status(400).json({
          error: `Attribute "${element[0]}" does not exist.`,
        });
        valid = false;
      } else if (!["ASC", "DESC"].includes(element[1])) {
        res.status(400).json({
          error: `Invalid order direction "${element[1]}". 
                  Please use 'ASC' or 'DESC'.`,
        });
        valid = false;
      }
    });
  }

  if ("where" in body) {
    Object.keys(body["where"]).forEach((attr) => {
      if (!check_attribute_exists(attr)) {
        res.status(400).json({ error: `Attribute "${attr}" does not exist.` });
        valid = false;
      }
    });
  }

  return valid;
};

module.exports = { check_json_req, json_validation };
