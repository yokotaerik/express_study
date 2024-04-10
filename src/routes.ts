import express from 'express';
import { UserController } from './controllers/userController';

const router = express.Router();

// Defina as rotas aqui
router.get('/test', (req, res) => {
    res.send('Test route');
});

router.post('/user', new UserController().createUser)
export default router;