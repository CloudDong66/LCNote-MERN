const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Dp = require('../../models/Dp');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Dp.find()
        .sort({ date: -1})
        .then(dps => res.json(dps))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Dp({
       name: req.body.name
   });

   newItem.save().then(dps => res.json(dps));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Dp.findById(req.params.id)
        .then(dps => dps.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;