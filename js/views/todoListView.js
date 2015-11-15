App.Views.TodoListView = Backbone.View.extend({
  template: _.template($('#todoList').html()),

  render: function(){
    var doLists = this.collection.toJSON();
      this.$el.html(this.template({
        doLists: doLists
      }));
      var doLength = doLists.length;
      $('#listLength').text(doLength +' List Items')
      function complete(){
        if(doLength === 0){
          $('#completed').text("No Tasks")
        } else{
          $('#completed').text("")
        }
      }
      complete()
      return this;
  },
  initialize: function () {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'prop', this.render);
    this.listenTo(this.collection, 'addClass', this.render);
    this.listenTo(this.collection, 'attr', this.render);
  }

});
