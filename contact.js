const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
app.use(express.urlencoded());
app.use(express.static('./assest'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'viewsfincontactlist'));
// app.use(function(req, res, next) {
//     console.log('my midile ware function');
//     next();
// });
var contactList = [{
        name: "shruti",
        phone: "1234566"
    },
    {
        name: "Papa",
        phone: "774566"
    },
    {
        name: "Bhaiya",
        phone: "456"
    }

]

app.get('/', function(req, res) {
    //console.log(req);
    return res.render('homeinviews', { title: "My contacts", Mylist_itr: contactList });
});
app.get('/p', function(req, res) {
    return res.render('practice', {
        titles: "lets play with games"
    });
});
// ye contact list mein phone no or name add kr rhe hai 
app.post('/create-contact', function(req, res) {
    contactList.push({
        name: req.body.name,
        phone: req.body.phone,

    });
    return res.redirect('/');
});
app.get('/delete-contact', function(req, res) {
    //console.log(req.query);
    let phone = req.query.phone;
    let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    if (contactIndex != -1) {
        contactList.splice(contactIndex, 1);
    }
    return res.redirect('back');

});
app.listen(port, function(err) {
    if (err) { console.log('error is here in this page', err); }
    console.log('yup my express js is working', port);
});