import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  // { id: 31, iat: 1727598155, exp: 1727684555 }
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No estás autorizado",
    });
  }

  // 'verify()' recibe el token
  jwt.verify(token, "xyz123", (err, decoded) => {
    if (err)
      return res.status(401).json({
        message: "No estás autorizado",
      });
       
      // guardamos el id en request, podremos
      // verlo asi 'clg(req.userId)' 
      req.userId = decoded.id
    next();
  });
};
