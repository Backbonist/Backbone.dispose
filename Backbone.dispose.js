var _cleanData = jQuery.cleanData;
var _html = jQuery.html;
var _ensureElement = Backbone.View.prototype._ensureElement;

// attach the view instance on the DOM
Backbone.View.prototype._ensureElement = function(){
  _ensureElement.call(this);
  this.$el.attr('data-view-cid', this.cid);
  this.$el.data('view', this);
};

// private method, please use `dispose` in your View
Backbone.View.prototype._dispose = function(){
  if(this.dispose) this.dispose();
};

// monkey patch clean data to call view._dispose before removing the DOM
jQuery.cleanData = function(elems){
  function dispose($el){
    if(!$el) $el = $(this);
    $el.data('view')._dispose();
    $el.removeAttr('data-view-cid');
  }

  for(var i=0; i < elems.length; i++){
    var elem = elems[i];
    var $elem = $(elem);
    $elem.find('[data-view-cid]').each(dispose);
    if ($elem.is('[data-view-cid]')) dispose($elem);
  }
  _cleanData.apply(this, arguments);
};

jQuery.html = function(){
  if(arguments.length >= 1){
    this.remove();
  }
  _html.apply(this, arguments);
};
