const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

//Serve static files from the build folder
app.use(express.static(path.join(__dirname, './build')));

//Route the index.html file (the entry point of our app) on the build folder by default:
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
});
app.listen(port, () => console.log(`Listening on ${port}!`));
