import express from 'express';

// import all controllers
import { getAllUsers, createUsers, getUserInfoByID } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/').post(createUsers);
router.route('/:id').get(getUserInfoByID);

export default router;