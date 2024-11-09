import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  // contiene las cookies`, host, origin, etc...
  // console.log("Headers:", req.headers);
  
  console.log('COOKIES')
  console.log(req.cookies)

  // 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV...'
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No estás autorizado xd",
    });
  }

  // 'verify()' recibe el token
  jwt.verify(token, "xyz123", (err, decoded) => {
    if (err) {
      return res.status(401).json({ 
        message: "No estás autorizado xd",
      });
    }

    req.userId = decoded.id; // 135
    next();
  });
};
