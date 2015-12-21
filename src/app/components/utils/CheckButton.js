var CheckButton = { // eslint-disable-line no-unused-vars
  controller : function(args) {
    this.class   = args.class;
    this.enabled = args.value;
    this.toggle  = function() { args.value(!args.value()); };
  },
  view : function(ctrl) {
    return (<button class={ ctrl.class } type="button" onclick={ ctrl.toggle.bind(this) }>
              <span class= "octicon octicon-check" style={ ctrl.enabled() ? '' : 'visibility: hidden;'}></span>
            </button>
    );
  },
};
