import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import indexRouter from './routes/index.mjs'

const app = express()
app.use(express.static('public'));

app.use(expressLayouts);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', indexRouter);

/*
app.use((req, res, next) => {
	res.status(404).render('404', { page: 'Page not found' });
});
*/

const port = process.env.PORT || 3000;
app.set('port', port);
app.listen(port, () => {});