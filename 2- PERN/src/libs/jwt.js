// librería llamada utilizada para generar y verificar tokens JWT.
import jwt from "jsonwebtoken";

// Esta función es asincrónica, por lo que puedes usarla con
// async/await o .then()/.catch() en el resto de tu aplicación.

// el 'payload' son los datos que quiero colocar
// dentro del token, en este caso solo la id
export const createAccessToken = (payload) => {
  // Executor: La función que se pasa como parámetro a 'new Promise'
  // es llamada el executor. Este recibe dos parámetros:

  // resolve: Es una función que llamas cuando la operación es exitosa. Al invocar resolve(valor), haces que la promesa se complete con éxito y valor se pasa a la próxima .then() en la cadena de promesas.

  // reject: Es una función que llamas cuando la operación falla. Al invocar reject(error), haces que la promesa se complete con error, y error se pasa a la próxima .catch() en la cadena.
  return new Promise((resolve, reject) => {
    // -> Primer parámetro (payload): Es la información que queremos codificar dentro del token.

    // -> Segundo parámetro ("xyz123"): Es la clave secreta utilizada para firmar el token. Esta clave es importante, ya que es la que se usa para verificar la autenticidad del token más tarde. En un entorno real, esta clave debería ser una variable de entorno segura y no estar hardcodeada.

    // -> Tercer parámetro (expiresIn: "1d"): Establece que el token expirará después
    // de 1 día. Esto significa que el token solo será válido por 24 horas.

    // -> Cuarto parámetro: Es un callback que se ejecuta después de que
    // se haya intentado generar el token. El callback recibe dos parámetros:

    // err: Si ocurre algún error durante la generación del token, este parámetro contendrá el error.
    // token: Si todo sale bien, este parámetro contendrá el token generado

    // Creamos el token
    jwt.sign(
      payload,
      "xyz123",
      {
        expiresIn: "1d",
      },
      (err, token) => {
        // si hay un error se activa el reject (falla la promesa)
        if (err) reject(err);
        // si todo va bien devuelve el token
        resolve(token);
      }
    );
  });
};
