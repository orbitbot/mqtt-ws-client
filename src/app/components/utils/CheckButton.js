var CheckButton = { // eslint-disable-line no-unused-vars
  controller : function(args) {
    var value = m.prop(false);

    this.class   = args.class;
    this.enabled = value;
    this.toggle  = function() { value(!value()); };
  },
  view : function(ctrl) {
    return (<button class={ ctrl.class } type="button" onclick={ ctrl.toggle.bind(this) }>
              <span class= "octicon octicon-check" style={ ctrl.enabled() ? '' : 'visibility: hidden;'}></span>
            </button>
    );
  },
};
