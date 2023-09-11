import express from 'express'
const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index');
});

router.get('/kontakt', (req, res, next) => {
	res.render('kontakt');
});

router.get('/fotogalerie', (req, res, next) => {
	res.render('fotogalerie');
});

router.get('/cenik', (req, res, next) => {
	res.render('cenik');
});

router.get('/pravidla', (req, res, next) => {
	res.render('pravidla');
});

router.get('/informace', (req, res, next) => {
	res.render('informace');
});

export default router;