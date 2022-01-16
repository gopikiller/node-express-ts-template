import { NextFunction, Request, Response } from 'express';

// get all post
const getPosts = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: 'posts'
  });
};

// getting a single post
const getPost = (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id;
  return res.status(200).json({
    message: `post id ${id}`
  });
};

// updating a post
const updatePost = (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id;
  const title: string = req.body.title ?? null;
  const body: string = req.body.body ?? null;

  return res.status(200).json({
    message: {
      id: id,
      title: title,
      body: body
    }
  });
};

// deleting a post
const deletePost = (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id;

  return res.status(200).json({
    message: `post deleted successfully ${id}`
  });
};

// adding a post
const addPost = (req: Request, res: Response, next: NextFunction) => {
  const title: string = req.body.title;
  const body: string = req.body.body;
  return res.status(200).json({
    message: {
      title: title,
      body: body
    }
  });
};

export default { getPosts, getPost, updatePost, deletePost, addPost };
