const app = require('./app');
const port = 3000;
app.listen(port, () => {
    console.log(`App russing on port ${port}..`);
});

// This file also contain Database configeration error handeling, environment variable