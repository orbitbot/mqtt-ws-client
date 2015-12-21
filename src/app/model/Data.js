var Data = {
  Connection : function() {
    return {
      host      : m.prop(''),
      port      : m.prop(''),
      ssl       : m.prop(false),
      clean     : m.prop(true),
      keepalive : m.prop(30),
      clientId  : m.prop(''),
      username  : m.prop(''),
      password  : m.prop(''),
      will      : new Data.Message(),
    };
  },
  Message : function() {
    return {
      data   : m.prop(''),
      topic  : m.prop(''),
      retain : m.prop(false),
      qos    : m.prop(0),
    };
  },
  Subscription : function() {
    return {
      topic : m.prop(''),
      qos   : m.prop(0),
    };
  },
};
