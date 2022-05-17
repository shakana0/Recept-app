import express, { Request, Response, Router } from "express";
import { getCategories, getRecepiesCategory, getRecepiesByCategorySearch } from "../db/recipeCrud";

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
router.get('/:categoryName/recipes', async (req: Request, res: Response) =>{
    const recipes = await getRecepiesByCategorySearch(req.params.categoryName);
    res.status(200).json(recipes)
});



export default router;
