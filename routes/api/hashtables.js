const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Hashtable = require('../../models/Hashtable');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Hashtable.find()
        .sort({ date: -1})
        .then(hashtables => res.json(hashtables))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Hashtable({
       name: req.body.name
   });

   newItem.save().then(hashtables => res.json(hashtables));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Hashtable.findById(req.params.id)
        .then(hashtables => hashtables.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;