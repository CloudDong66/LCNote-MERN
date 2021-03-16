const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Sort = require('../../models/Sort');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Sort.find()
        .sort({ date: -1})
        .then(sorts => res.json(sorts))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Sort({
       name: req.body.name
   });

   newItem.save().then(sorts => res.json(sorts));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Sort.findById(req.params.id)
        .then(sorts => sorts.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;