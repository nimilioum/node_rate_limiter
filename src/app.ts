import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
require('dotenv').config();

import postsRouter from './routes/posts';

const app = express();
mongoose.connect(process.env.DB_URL || 'mongodb://127.0.0.1/');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));


app.use('/posts' ,postsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.listen(process.env.SERVER_PORT || 3000);