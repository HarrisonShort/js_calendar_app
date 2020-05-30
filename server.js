const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const gigRoutes = require('./routes/gig.routes');
const keys = require('./config/keys');

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

// Connect to our mongo db database.
mongoose.connect(process.env.MONGODB_URI || keys.LOCAL_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

// Use our gigRoutes from ./routes/gig.routes
// Format Example: .../gigs/create
app.use('/gigs', gigRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));
} else {
    console.log('Not production');
}

// Send user to index.html if request unrecognized
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// })

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});