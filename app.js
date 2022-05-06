const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => { res.status(200).json({ message: 'Hellow from server side', app: 'Bismillah' }) });
app.listen(port, () => {
    console.log(`App russing on port ${port}..`);
});


