const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/calculator', require('./routes/calculatorRoutes'));

app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});