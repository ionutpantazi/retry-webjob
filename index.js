const createHandler = require("azure-function-express").createHandler;
const express = require("express");
// Create express app as usual
const app = express();
const port = 3000;
app.get("/api/hello-world", (req, res) => {
    res.json({
        status: "Welocme to Express App: Hello-world"
    });
});
// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Binds the express app to an Azure Function handler
module.exports = createHandler(app);