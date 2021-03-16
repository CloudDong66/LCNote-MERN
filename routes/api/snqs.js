const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Snq = require('../../models/Snq');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Snq.find()
        .sort({ date: -1})
        .then(snqs => res.json(snqs))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Snq({
       name: req.body.name
   });

   newItem.save().then(snqs => res.json(snqs));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Snq.findById(req.params.id)
        .then(snqs => snqs.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;