Backbone.dispose
================

Backbone plugin: dispose

Extends Backbone.View to add the `view.dipose()`. Events are powerfull, but could lead to memory leaks if you forget to remove your listeners. 

`Backbone.dispose` plugin, allow you to define a `dispose` function to remove your listeners.

`dispose` is called when `$('.something-containing-my-$el').remove` or when `$('.something-containing-my-$el').html('...')` is called.


## Example:

    var View = Backbone.View.extend({

      initialize: function(){
        $('#counter').click(this.onClick);
      },

      dispose: function(){
        console.log('dispose called');
        $('#counter').off();
      },
    }):


    var view = new View({el: '.div1 .div2'});

    $('.div1').remove(); //dispose called
    $('.div2').remove(); //dispose called
    $('.div1').html('<div/>'); //dispose called
    $('.div2').html('<div/>'); //dispose called
