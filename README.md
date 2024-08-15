# Polar Solstice

To run the project as of 8pm on 8/14/2024
Install postgres and create a user
In postgres create a database and give the new user permissions
Update the config.json - development section with the new credentials

From the command line run - npm run both


1. Concurrently is install
2. The "both" script will connect to the databse (IF you have the correct
credentials) and create the table and seed it with the products
2a. It will then start the node server (for the products route/endpoint)
2b. It will then start the react server on localhost:5173

NOTE: the node server will run on port 3000 by default
this is hardcode in the code inside products.jsx and server.js

To change the seeds modify - seed.js



{
          id: 1,
          name: "Ultra Mittens"
		  price: "$20",
		  details: "Designed to keep your hands dry and warm when out all day in snowy, cold conditions with advanced insullation."
          image: './src/images/gloves.jpg'
      
},
{
          id: 2,
          name: "Snow Boots",
		  price: "$250",
		  details: "Snow boots lined with a skin-friendly micro fleece which covers the inside, from the top of the insole. Its wrapped completely the feet to keep warm. "
          image: './src/images/boots.jpg'
      
},
{
          id: 3,
          name: "Ski Mask" ,
		  price: "$25",
		  details: "Moisture-Wicking: Advanced fabric technology wicks sweat away from the skin, keeping you dry and comfortable.",
          image: './src/images/mask.jpg'
      
},
{
          id: 4,
          name: "Sherpa Sweater" ,
		  price: "$50",
		  details: "Warm, soft, sherpa-lined, windproof and comfortable thermal fleece keep you warm in cold weather.",
          image: './src/images/sweater.jpg'
      
},
{
          id: 5,
          name: "Artic Coat",
		  price: "$1,500",
		  details: "Featuring a water repellent outer shell, our jacket will absorb moisture and keep you dry, providing ultimate protection from wind, water, and snow.",
          image: './src/images/coat.jpg'
      
},
{
          id: 6,
          name: "Thermal Socks",
		  price: "$40",
		  details: "The perfect thick wool socks trap in heat to keep your feet warm in even the chilliest winter air.",
          image: './src/images/socks.jpg'
      
},
{
          id: 7,
          name: "Winter Muffs",
		  price: "$35",
		  details: "Made to fully cover your ears with a thick, soft cozy fleece lining. The double-layer construction protects you from even the coldest winter days with extra warmth.",
          image: './src/images/muffs.jpg'
      
},
{
          id: 8,
          name: "Polar Pants",
		  price: "$160",
		  details: "Rip proof material used for protection againtst even the toughest weather.",
          image: './src/images/pants.jpg'
      
},
{
          id: 9,
          name: "Sleeping bag",
		  price: "$300",
		  details: "Even in extreme temperatures, these sleeping bags will keep you warm and comfortable thanks to their innovative fiber fill.",
          image: './src/images/sleeping_bag.jpg'
      
},