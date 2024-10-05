// codigo que vamos a reutilizar en otras partes
import jwt from "jsonwebtoken";

// el 'payload' son los datos que quiero colocar dentro del token
export const createAccessToken = (payload) => {
  // Convertimos el callback en una version async await,
  // englobamos todo dentro de una promesa
  return new Promise((resolve, reject) => {
    jwt.sign(payload, "xyz123", {
        expiresIn: "1d",
      }, (err, token) => {
        // si hay un error se activa el reject (falla la promesa)
        if (err) reject(err)
        // si todo va bien devuelve el token
        resolve(token)
      }
    );
  });
};
