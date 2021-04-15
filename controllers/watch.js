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
exports.watch_delete = async function(req, res) {
        console.log("delete "  + req.params.id)
        try {
            result = await watch.findByIdAndDelete( req.params.id)
            console.log("Removed " + result)
            res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": Error deleting ${err}}`);
        }
    };

    // Handle a show one view with id specified by query
exports.watch_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await watch.findById( req.query.id)
        res.render('watchdetail', 
{ title: 'watch Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.watch_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('watchcreate', { title: 'watch Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.watch_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await watch.findById(req.query.id)
        res.render('watchupdate', { title: 'watch Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.watch_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await watch.findById(req.query.id)
        res.render('watchdelete', { title: 'watch Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.watch_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await watch.findById( req.params.id)
        // Do updates of properties
        if(req.body.Name) toUpdate.Name = req.body.Name;
        if(req.body.Company) toUpdate.Company = req.body.Company;
        if(req.body.Price) toUpdate.Price = req.body.Price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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