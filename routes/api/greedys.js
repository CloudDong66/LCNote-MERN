const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Greedy = require('../../models/Greedy');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Greedy.find()
        .sort({ date: -1})
        .then(greedys => res.json(greedys))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Greedy({
       name: req.body.name
   });

   newItem.save().then(greedys => res.json(greedys));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Greedy.findById(req.params.id)
        .then(greedys => greedys.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;