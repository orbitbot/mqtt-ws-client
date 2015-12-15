m.mount(document.getElementById('navigation'), Menu);

m.route.mode = 'hash';
m.route(document.getElementById('content'), '/connect', {
  '/connect'        : Connect,
  '/broker/:hostId' : Connection,
  '/publish'        : Publish,
  '/about'          : About,
  '/settings'       : Settings,
});
