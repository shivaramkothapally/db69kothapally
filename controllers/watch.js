var watch = require('../models/watch');
// List of all Costumes
exports.watch_list = async function(req, res) {
    try {
        theWatches = await watch.find();
        res.send(theWatches);
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// for a specific Costume.
exports.watch_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await watch.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Costume create on POST.
exports.watch_create_post = async function(req, res) {
    console.log(req.body)
    let document = new watch();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.Company = req.body.Company;
    document.Price = req.body.Price;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};
// Handle Costume delete form on DELETE.
exports.watch_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.watch_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);

};

// VIEWS
// Handle a show all view
exports.watch_view_all_Page = async function(req, res) {
    try {
        theWatch = await watch.find();
        res.render('watch', { title: 'watch Search Results', results: theWatch });
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }

};