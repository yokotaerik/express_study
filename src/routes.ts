import express from 'express';

const router = express.Router();

// Defina as rotas aqui
router.get('/test', (req, res) => {
    res.send('Test route');
});


export default router;