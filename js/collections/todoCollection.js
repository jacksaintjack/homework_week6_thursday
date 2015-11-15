App.Collections.Todo = Backbone.Collection.extend({
  model: App.Models.Todo,
  url:' http://tiny-starburst.herokuapp.com/collections/todoNick'
});
