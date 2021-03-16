const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Array_ = require('../../models/array');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Array_.find()
        .sort({ date: -1})
        .then(array => res.json(array))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Array_({
       name: req.body.name
   });

   newItem.save().then(array => res.json(array));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Array_.findById(req.params.id)
        .then(array => array.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;