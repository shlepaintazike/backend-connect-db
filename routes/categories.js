const { sendCategoryCreated, sendAllCategories, sendCategoryUpdated, sendCategoryDeleted, sendCategoryById } = require('../controllers/categories');
const { findAllCategories, createCategory, updateCategory, checkEmptyName, deleteCategory, findCategoryById, checkIsCategoryExists } = require('../middlewars/categories');

const categoriesRouter = require('express').Router();

categoriesRouter.get('/categories', findAllCategories, sendAllCategories, findCategoryById, sendCategoryById);
categoriesRouter.post('/categories',findAllCategories, checkIsCategoryExists, checkEmptyName, createCategory, sendCategoryCreated);
categoriesRouter.put('/categories/:id',checkEmptyName, updateCategory, sendCategoryUpdated);
categoriesRouter.delete('/categories/:id', deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;