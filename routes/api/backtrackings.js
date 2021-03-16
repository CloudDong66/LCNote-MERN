const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Backtracking = require('../../models/Backtracking');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Backtracking.find()
        .sort({ date: -1})
        .then(backtrackings => res.json(backtrackings))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Backtracking({
       name: req.body.name
   });

   newItem.save().then(backtrackings => res.json(backtrackings));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Backtracking.findById(req.params.id)
        .then(backtrackings => backtrackings.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;