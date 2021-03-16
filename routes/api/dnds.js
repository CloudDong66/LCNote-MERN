const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Dnd = require('../../models/Dnd');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Dnd.find()
        .sort({ date: -1})
        .then(dnds => res.json(dnds))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Dnd({
       name: req.body.name
   });

   newItem.save().then(dnds => res.json(dnds));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Dnd.findById(req.params.id)
        .then(dnds => dnds.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;