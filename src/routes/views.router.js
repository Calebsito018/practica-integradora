import { Router } from "express";
import viewController from '../controllers/views.controller.js'
import { getUserData, checkSession, checkAdmin, publicAcces, privateAcces, manageProducts, checkAdminSession} from '../middlewares/middlewares.js'

const router = Router();

router.get('/', checkAdmin, getUserData, viewController.allProducts);
router.get('/realtimeproducts',checkAdminSession, manageProducts, getUserData, viewController.realtimeproducts);
router.get('/product/:pid', viewController.oneProduct);
router.get('/view/products', getUserData, viewController.viewAllProducts),
router.get('/view/carts/:cid', getUserData, viewController.viewOneCart);
router.get('/register', publicAcces, viewController.viewRegister);
router.get('/login', publicAcces, viewController.viewLogin);
router.get('/profile', privateAcces, getUserData, viewController.viewProfile);
router.get('/mockingproducts', viewController.mockingProducts);
router.get('/recoverpass', viewController.recoverPass)
router.get('/restorepassword', viewController.restorepassword);
router.post('/newpassword', viewController.newPassword)
router.get('/newproduct', getUserData, manageProducts, viewController.newProduct)
router.get('/myproducts',getUserData, manageProducts, viewController.myproducts)

export default router
