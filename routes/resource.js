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
/* GET detail costume page */
router.get('/detail', watch_controller.watch_view_one_Page);
/* GET create costume page */
router.get('/create', watch_controller.watch_create_Page);
/* GET create update page */
router.get('/update', watch_controller.watch_update_Page);
/* GET create costume page */
router.get('/delete', watch_controller.watch_delete_Page);
module.exports = router;