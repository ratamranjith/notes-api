const express = require('express');
const notesRoutes = require('./routes/notes');

const app = express();
const PORT = 3000;

app.use(express.json()); // Body parser middleware
app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
