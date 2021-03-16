const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Recursion = require('../../models/Recursion');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Recursion.find()
        .sort({ date: -1})
        .then(recursions => res.json(recursions))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Recursion({
       name: req.body.name
   });

   newItem.save().then(recursions => res.json(recursions));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Recursion.findById(req.params.id)
        .then(recursions => recursions.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;