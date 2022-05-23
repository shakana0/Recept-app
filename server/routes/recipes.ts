import express, { Request, Response, Router } from "express";
import { postRecipe, getAllRecipes, getRecipeById, deleteRecipeById, getRecipesBySearch, postRating, postComment } from "../db/recipeCrud";

const router = express.Router();

// router.get("/", (req: Request, res: Response) => {
//   res.send("GET recipes");
// });

router.post("/", async (req: Request, res: Response) => {
    const postedRecipe = await postRecipe(req.body);
    res.status(201).json(postedRecipe);
  });

router.get("/", async (req: Request, res: Response) => {
  const allRecipes = await getAllRecipes();
  res.json(allRecipes);
});

router.get("/:id", async (req: Request, res: Response) => {
  const singleRecipe = await getRecipeById(req.params.id);
  res.json(singleRecipe);
});

router.delete('/:id', async (req: Request, res: Response) =>{
    const deletedRecipe = await deleteRecipeById(req.params.id)
    res.json(deletedRecipe)
  })

  router.get('/search/:query', async (req: Request, res: Response) =>{
    const recipes = await getRecipesBySearch(req.params.query);
    res.json(recipes)
});

router.post("/:id/ratings", async (req: Request, res: Response) => {
  const postedRating = await postRating(req.params.id, req.body.ratings);
  console.log(req.body)
  res.status(201).json(postedRating);
});

router.post("/:id/comments", async (req: Request, res: Response) => {
  const postedComment = await postComment(req.params.id, req.body);
  console.log(req.body)
  res.status(201).json(postedComment);
});

export default router;
