const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Tree = require('../../models/Tree');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Tree.find()
        .sort({ date: -1})
        .then(trees => res.json(trees))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Tree({
       name: req.body.name
   });

   newItem.save().then(trees => res.json(trees));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Tree.findById(req.params.id)
        .then(trees => trees.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;