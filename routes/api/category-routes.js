const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Category, Product}]
    });
    res.status(500).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = await categoryData.findByPk(req.params.id, {
      include: [{ model: Category, Product}],
    });

    if(!categoryData) {
      res.status(404).json({ message: 'No catrgory found with that id!'});
      return;
    }

    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/:id', async (req, res) => {
  // create a new category
  try{
  const categoryData = await Category.create(req.body);
  res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(400).json({ message: 'Category unbale to be updated'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(200).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(400).json({ message: 'No Category found with that id!'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(200).json(err);
  }
});

module.exports = router;
