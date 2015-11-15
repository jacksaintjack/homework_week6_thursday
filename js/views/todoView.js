App.Views.Todo = Backbone.View.extend({
  template: _.template($('#mainArea').html()),

  send: function(){
    var self = this;
    var inputArea = $("#todoInput").val()
    var addToDo = new App.Models.Todo({
      todo: inputArea,
      completed: false
    });

    if (inputArea.trim() === '') {
      alert('No input');
      return;
    }

    addToDo.save()
    .then(function() {
      self.collection.add(addToDo);
    })
    .then(function () {
      self.collection.remove();
    })
  },

  render: function(){
    // _.each(this.collection, function(model) { ////Make other views for deltes
    //   var view = new singleTodoView({model: model})
    //   view.render();
    //   this.$el.append(view.el);
    // })
    console.log(length);
    this.$el.html(this.template());
  },

  events: {
     'keyup #todoInput': 'logKey',
     'click #deleteList': 'deleteClick',
     'click #check': 'checkClick'
   },
   logKey: function(e) {
    if (e.keyCode === 13) {
      this.send();
      $('#todoInput').val("");
    }
  },
   deleteClick: function(event) {
     console.log(event.target)
     var data = $(event.target).attr('data-id');
     this.collection.get(data).destroy();
   },
  checkClick: function(event){
    var dataCompleted = $(event.target).attr('data-completed');
    console.log(dataCompleted)
    if (dataCompleted === 'true') {
      var dataId = $(event.target).attr('data-id');
      this.collection.get(dataId).save('completed', false)
      $(event.target).attr('data-completed', 'false');
    }
    else if (dataCompleted === 'false') {
      var dataId = $(event.target).attr('data-id');
      var dataTrue = this.collection.get(dataId).save('completed', true);
      $(event.target).attr('data-completed', 'true');
    }
 },
 initialize: function () {
   this.listenTo(this.model, 'css', this.render);
 }
});
