import express, { Router } from 'express';

import PostController from '@Controllers/PostController';

export const route: Router = express.Router();

// Posts Route
route.get('/posts', PostController.getPosts);
route.get('/posts', PostController.getPosts);
route.get('/posts/:id', PostController.getPost);
route.put('/posts/:id', PostController.updatePost);
route.delete('/posts/:id', PostController.deletePost);
route.post('/posts', PostController.addPost);
