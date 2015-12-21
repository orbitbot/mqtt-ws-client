var RadioButtons = { // eslint-disable-line no-unused-vars
  controller : function(args) {
    this.options  = [0, 1, 2];
    this.selected = args.value;
    this.select   = function(val) { args.value(val); };
  },
  view : function(ctrl) {
    return (<div class="btn-group">
              {
                ctrl.options.map(function(el) {
                  return (
                    <button type="button"
                      class={ ctrl.selected() === el ? 'btn selected' : 'btn' }
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
