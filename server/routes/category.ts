import express, { Request, Response, Router } from "express";
import { getCategories, getRecepiesCategory, getRecipeInCategory } from "../db/recipeCrud";

const router = express.Router()

//hämtar alla kategorier
router.get('/category', async (req: Request, res: Response) =>{
    const recipes = await getCategories();
    res.status(200).json(recipes)
});

//söker på kategori
router.get('/:category', async (req: Request, res: Response) =>{
    const category = await getRecepiesCategory(req.params.category); //är case sansitve
    res.status(200).json(category)
});

//söker på kategori namn
// router.get('/:categoryName/recipes', async (req: Request, res: Response) =>{
//     const recipes = await getRecepiesByCategorySearch(req.params.categoryName);
//     res.status(200).json(recipes)
// });

router.get('/:categoryName/:query', async (req, res) => {
    const category = await getRecipeInCategory(req.params.categoryName, req.params.query)
    res.status(200).json(category)
})

export default router;
