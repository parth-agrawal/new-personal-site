import express from 'express';
import prisma from './prisma/prisma.client';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use(cors());



// Routes
app.get('/', (req, res) => {
    res.send('Hello worldo!');
});

app.get('/api/project/all', async (req, res) => {

    const projects = await prisma.project.findMany();
    res.json(projects);

})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
