const express = require('express');
const app = express();
const carRoutes = require('./routes/cars');  // Update to the new route
const port = 3001;

const cors = require('cors');
app.use(cors());  // מאפשר חיבורים מכל דומיין


app.use(express.json());

// Set the routes for handling CRUD operations for cars
app.use('/cars', carRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});