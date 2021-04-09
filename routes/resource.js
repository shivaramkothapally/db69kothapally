var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var watch_controller = require('../controllers/watch');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/watch', watch_controller.watch_create_post);
// DELETE request to delete Costume.
router.delete('/watch/:id', watch_controller.watch_delete);
// PUT request to update Costume.
router.put('/watch/:id', watch_controller.watch_update_put);
// GET request for one Costume.
router.get('/watch/:id', watch_controller.watch_detail);
// GET request for list of all Costume items.
router.get('/watch', watch_controller.watch_list);
module.exports = router;