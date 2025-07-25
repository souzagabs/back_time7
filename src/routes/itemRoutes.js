import { Router } from "express";
import multer from 'multer'; 
import itensController from "../controllers/itemController.js";
import loginControllers from "../controllers/loginController.js";
const { authenticateToken } = loginControllers;

const upload = multer(); 
const router = Router();

router.get('/', itensController.getItens);
router.get('/:id', itensController.getItemById);
router.post('/', itensController.createItem);

router.put('/:id', upload.single('fotoArquivo'), itensController.updateItem);

router.delete('/:id', itensController.deleteItem);
router.get('/usuario/itens', authenticateToken, itensController.getItensDoUsuarioLogado);

export default router;