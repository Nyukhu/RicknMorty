'use strict';
module.exports = function(app) {
  var cors = require('cors');
  app.use(cors());
  var favoriteResidents = require('../controllers/appController');

  // todoList Routes
  app.route('/residents')
    .get(favoriteResidents.list_all_favResidents)
    .post(favoriteResidents.create_a_favResident)
    .delete(favoriteResidents.delete_a_favResident);

   
   app.route('/residents/:residentId')
    .get(favoriteResidents.read_a_favResident)
    };