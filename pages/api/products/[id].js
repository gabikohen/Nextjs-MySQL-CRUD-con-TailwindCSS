
'use-strict'
import {pool} from '../../../config/db'

// request es la peticion lo que esta enviando el navegador
// response las funciones que yo puedo deolver al navegador 

export default async function handler(req, res) {

 const {id} = req.query.id

 const [result] = await pool.query('SELECT * FROM product WHERE id = ? '[id])

 return res.status(200).json(result[0])

   /*  console.log(req.query);
    res.status(200).json('Getting one product:' + req.query.id)
    // puedo procesar y enviar una respuesta */
  }
  