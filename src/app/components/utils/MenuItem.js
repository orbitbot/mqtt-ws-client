var MenuItem = { // eslint-disable-line no-unused-vars
  controller : function(attr, children) {
    attr.children = children;
    attr.selected = m.prop();
    function checkSelected() {
      attr.selected(location.hash === attr.href ? ' selected' : '');
    }

    window.addEventListener('hashchange', checkSelected);
    checkSelected();
    return attr;
  },
  view : function(param) {
    return (<a class={ param.class + param.selected() } href={ param.href }>
              { param.children }
            </a>
    );
  },
};
