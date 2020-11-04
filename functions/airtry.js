const Airtable = require('airtable');
exports.handler = function(event, context, callback) {
    console.log('so far so good');
    var Airtable = require ('airtable');
    var base = new Airtable({apiKey:'keyFqKmXCtU2IkZGw'}).base(
    'app1ANJMB2FcVdb5o');
    console.log('this is working');
    /*base('Table 1').select({
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage){
        records.forEach(function(record){
            console.log('Retrieved', record.get('Name'));
        });
        fetchNextPage();}, function done(err){
            if (err) {console.error(err); return;}
        });*/
    base('Table 1').create([{
        "fields":{
            "Name":"5",
            "login":"Gabriel",
            "senha":"gabriel123",
            "atributo1":"ok"
        }
    }], function(err, records){
        if (err){ console.error(err);
        return;}records.forEach(function(record){
            console.log(record.getId());
        });
    })
    }