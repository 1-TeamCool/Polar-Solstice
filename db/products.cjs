/* eslint-disable no-undef */
const client = require('./client.cjs');

const addProduct = async(name, details, price, img) => {
  try {
    const result = await client.query(`
      INSERT INTO products (name, details, price, img)  
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `, [name, details, price, img]);

    console.log(`${name} product inserted correctly`)
    return result.rows[0];
    
  } catch (error) {
    console.log('Error adding product..', error);
    throw error;
  }
};

module.exports = {
  addProduct
}