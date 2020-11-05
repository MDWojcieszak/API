const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).send({ error: "Access denied" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, _id) => {
    if (error) return res.status(403).send({ error: "Token out of date" });
    req.user_id = _id;
    next();
  });
};
module.exports = authenticateToken;
