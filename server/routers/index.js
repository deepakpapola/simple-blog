import express from 'express';

let router = express.Router();

import { blogCtrl } from '../controllers'

router.post('/newblog',blogCtrl.addBlog);



module.exports = router;