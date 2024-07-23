import express from "express";
const app = express();
const port = 3000;
import Customer from './models/Customer.mjs';

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));


const customers = [
    new Customer('John Doe', 'Company A', '123-456-7890', 'john@example.com', 'USA', 'Active'),
    new Customer('Jane Smith', 'Company B', '987-654-3210', 'jane@example.com', 'Canada', 'Inactive'),
    new Customer('Alice Johnson', 'Company C', '555-555-5555', 'alice@example.com', 'UK', 'Inactive'),
    new Customer('John Doe', 'Company A', '123-456-7890', 'john@example.com', 'USA', 'Active'),
    new Customer('Jane Smith', 'Company B', '987-654-3210', 'jane@example.com', 'Canada', 'Inactive'),
    new Customer('Alice Johnson', 'Company C', '555-555-5555', 'alice@example.com', 'UK', 'Inactive'),
    new Customer('John Doe', 'Company A', '123-456-7890', 'john@example.com', 'USA', 'Active')
  ];

app.get('/', (req, res) => {
  res.render('index', { title: 'Customer List', message: 'Hello Evano 👋🏼,', customers });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
