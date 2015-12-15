var RadioButtons = { // eslint-disable-line no-unused-vars
  controller : function() {
    var value = m.prop(0);

    this.options  = [0, 1, 2];
    this.selected = value;
    this.select   = function(val) { value(val); };
  },
  view : function(ctrl) {
    return (<div class="btn-group">
              {
                ctrl.options.map(function(el) {
                  return (
                    <button class={ ctrl.selected() === el ? 'btn selected' : 'btn' }
                      type="button"
                      onclick={ ctrl.select.bind(this, el) }>
                      { el }
                    </button>
                  );
                })
              }
            </div>
    );
  },
};
