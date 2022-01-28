const express = require('express');
const cors = require('cors');
const customers = require('./routes/customers');
const app = express();
const port = 5004;
app.use(express.json());
app.use(cors({origin: 'http://edtech.dudeful.com:5005'}));

app.use('/products', customers);

app.listen(port);