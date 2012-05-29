var View = Backbone.View.extend({
  el: '#content',
  counter: 0,
  initialize: function(){
    _.bindAll(this);
    $('#counter').click(this.onClick);
  },

  dispose: function(){
    $('#counter').off();
  },
  onClick: function(){
    this.counter++;
    this.render();
  },

  render: function(){
    this.$el.html('toto ' + this.counter);
    return this;
  }
});

$(function(){
  var view = new View();
  view.render();

  $('#reset').click(function(){
    $('#content').remove();
    view = null;
  });
});
