

// request es la peticion lo que esta enviando el navegador
// response las funciones que yo puedo deolver al navegador 

export default function handler(req, res) {
    console.log(req.query);
    res.status(200).json('Getting one product:' + req.query.id)
    // puedo procesar y enviar una respuesta
  }
  