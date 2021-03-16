const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Linkedlist = require('../../models/Linkedlist');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Linkedlist.find()
        .sort({ date: -1})
        .then(linkedlists => res.json(linkedlists))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Linkedlist({
       name: req.body.name
   });

   newItem.save().then(linkedlists => res.json(linkedlists));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Linkedlist.findById(req.params.id)
        .then(linkedlists => linkedlists.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;