import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json("Getting products");

    case "POST":
      const { name, description, price } = req.body;

      const [result] = await pool.query("INSERT INTO product set ?", {
        name,
        description,
        price,
      });

      return res
        .status(200)
        .json({ name, price, description, id: result.insertId });
  }
}

/*   
    if(req.method === 'POST'){
 
        console.log('Creando un producto')
                console.log(req.body);
    }else{
    return res.status(200).json('getting a product')
   }
    res.status(200).json('Getting products')
  } */
