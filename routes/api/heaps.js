const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Heap = require('../../models/Heap');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Heap.find()
        .sort({ date: -1})
        .then(heaps => res.json(heaps))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Heap({
       name: req.body.name
   });

   newItem.save().then(heaps => res.json(heaps));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Heap.findById(req.params.id)
        .then(heaps => heaps.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;