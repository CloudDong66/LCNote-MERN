const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Graph = require('../../models/Graph');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Graph.find()
        .sort({ date: -1})
        .then(graphs => res.json(graphs))
});

// @route POST api/items
// @desc Create an item
// @access Private
router.post('/', auth, (req, res) => {
   const newItem = new Graph({
       name: req.body.name
   });

   newItem.save().then(graphs => res.json(graphs));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    Graph.findById(req.params.id)
        .then(graphs => graphs.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
 });
module.exports = router;
// export default router;