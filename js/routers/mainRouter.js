App.Router = Backbone.Router.extend({
  routes:{
    '': 'todo',
  },

  todo: function(){
    var collection = new App.Collections.Todo();
    var view = new App.Views.Todo({
      collection: collection
    });
    view.render()
    $('#mainSection').html(view.$el);

    var list = new App.Views.TodoListView({
      collection: collection
    })

    collection.fetch({
      success: function(){
        list.render()
        $('#listStart').html(list.$el);
      }
    })
  }
});

App.router = new App.Router();
Backbone.history.start();
