import express from 'express';

let router = express.Router();

import { blogCtrl, mediaCtrl } from '../controllers'

router.post('/admin/newBlog',blogCtrl.addBlog);

router.post('/imageUpload',mediaCtrl.imgUpload);
router.post('/imageDelete',mediaCtrl.imgDelete);
router.post('/fileUpload',mediaCtrl.fileUpload);
router.post('/fileDelete',mediaCtrl.fileDelete);

module.exports = router;