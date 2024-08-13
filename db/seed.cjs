const client = require('./client.cjs');
const { addProduct } = require('./products.cjs')



const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS products;  
    `)
  } catch (error) {
    console.log('Error dropping tables..', error);
    throw error;
  }
};

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL UNIQUE,
      details TEXT NOT NULL,
      price INT NOT NULL,
      img TEXT NOT NULL
      );
    `)
  } catch (error) {
    console.log('Error creating tables..', error);
    throw error;
  }
};

const syncAndSeed = async() => {
  // connect
  client.connect();
  console.log('Connected..')

  // drop tables
  await dropTables();
  console.log('Tables Dropped..')

  // create tables
  await createTables();
  console.log('Tables Created..')

  // seed data
  await addProduct('Ultra_Mittens', 'Designed to keep your hands dry and warm when out all day in snowy, cold conditions with advanced insullation.', 20, './src/images/gloves.jpg');

  await addProduct('Snow_Boots', 'Snow boots lined with a skin-friendly micro fleece which covers the inside, from the top of the insole. Its wrapped completely the feet to keep warm.', 250, './src/images/boots.jpg');

  await addProduct('Ski_Mask', 'Moisture-Wicking: Advanced fabric technology wicks sweat away from the skin, keeping you dry and comfortable.', 25, './src/images/mask.jpg');

  await addProduct('Sherpa_Sweater', 'Warm, soft, sherpa-lined, windproof and comfortable thermal fleece keep you warm in cold weather.', 50, './src/images/sweater.jpg');

  await addProduct('Artic_Coat', 'Featuring a water repellent outer shell, our jacket will absorb moisture and keep you dry, providing ultimate protection from wind, water, and snow.', 1,500, './src/images/coat.jpg');

  await addProduct('Thermal_Socks', 'The perfect thick wool socks trap in heat to keep your feet warm in even the chilliest winter air.', 40, './src/images/socks.jpg');

  await addProduct('Winter_Muffs', 'Made to fully cover your ears with a thick, soft cozy fleece lining. The double-layer construction protects you from even the coldest winter days with extra warmth.', 35, './src/images/muffs.jpg');

  await addProduct('Polar_Pants', 'Rip proof material used for protection againtst even the toughest weather.', 160, './src/images/pants.jpg');

  await addProduct('Sleeping_Bag', 'Even in extreme temperatures, these sleeping bags will keep you warm and comfortable thanks to their innovative fiber fill.', 300, './src/images/sleeping_bag.jpg');


  // disconnect
  client.end();
};

syncAndSeed();