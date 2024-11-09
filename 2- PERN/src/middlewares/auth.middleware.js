import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  // contiene las cookies`, host, origin, etc...
  // console.log("Headers:", req.headers);
  
  // 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV...'
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No estás autorizado",
    });
  }

  // 'verify()' recibe el token
  jwt.verify(token, "xyz123", (err, decoded) => {
    if (err) {
      return res.status(401).json({ 
        message: "No estás autorizado",
      });
    }

    req.userId = decoded.id; // 135
    next();
  });
};
