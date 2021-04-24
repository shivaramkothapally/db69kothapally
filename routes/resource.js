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
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
router.get('/detail', watch_controller.watch_view_one_Page);
/* GET create costume page */
router.get('/create',  secured, watch_controller.watch_create_Page);
/* GET create update page */
router.get('/update', secured, watch_controller.watch_update_Page);
/* GET create costume page */
router.get('/delete',  secured, watch_controller.watch_delete_Page);
module.exports = router;