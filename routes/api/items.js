const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create an item
// @access  Public
router.post('/', (req, res) => {
  Item.create(req.body)
    .then(result => {
      res.json(result);
    });
});

// @route   DELETE api/items/:id
// @desc    Delete an item
// @access  Public
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Item.findByIdAndRemove(id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(404).json({
        message: '删除失败！'
      });
    });
});

module.exports = router;