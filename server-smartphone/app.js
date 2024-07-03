const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

const orderRouter = require('./app/api/v1/orders/router');
const authRouter = require('./app/api/v1/users/router');

const notFoundMiddleware = require('./app/middlewares/not-found');
const handleErrorMiddleware = require('./app/middlewares/handler-error');

app.use(cors({
    origin: '*',
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to api',
    });
});

app.use(orderRouter);
app.use(authRouter);

app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
