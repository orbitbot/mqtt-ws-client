var Connect = { // eslint-disable-line no-unused-vars
  controller : function(args) {
    this.props = args ||new Data.Connection();

    this.connect = function(values) {
      // args.connect(values);
    };
  },
  view : function(ctrl) {
    return (
          <div>
            <h2>Add connection</h2>

            <form class="connect-form clearfix">
              <div class="one-half left broker">
                <h3>Broker</h3>
                <dl class="form">

                  <div class="flex-table">

                    <div class="flex-table-item flex-table-item-primary">
                      <dt><label>URL</label></dt>
                      <dd>
                        <input class="input-block" type="text"
                          value={ ctrl.props.host() }
                          onchange={ m.withAttr('value', ctrl.props.host) } />
                      </dd>
                    </div>

                    <div class="flex-table-item">
                      <dt><label>Port</label></dt>
                      <dd>
                        <input class="input" type="text"
                          value={ ctrl.props.port() }
                          onchange={ m.withAttr('value', ctrl.props.port) } />
                      </dd>
                    </div>

                    <div class="flex-table-item">
                      <dt><label>SSL</label></dt>
                      <dd><CheckButton class="btn inline" value={ ctrl.props.ssl } /></dd>
                    </div>
                  </div>

                  <div class="input-group">
                    <label class="inline">Clean session</label>
                    <CheckButton class="btn inline" value={ ctrl.props.clean } />

                    <label class="inline">Keepalive</label>
                    <input class="input inline" type="number"
                      value={ ctrl.props.keepalive() }
                      onchange={ m.withAttr('value', ctrl.props.keepalive) } />
                  </div>

                  <dt><label>ClientId</label></dt>
                  <dd>
                    <input class="input-block" type="text"
                      value={ ctrl.props.clientId() }
                      onchange={ m.withAttr('value', ctrl.props.clientId) } />
                  </dd>

                  <dt><label>Username</label></dt>
                  <dd>
                    <input class="input-block" type="text"
                      value={ ctrl.props.username() }
                      onchange={ m.withAttr('value', ctrl.props.username) } />
                  </dd>

                  <dt><label>Password</label></dt>
                  <dd>
                    <input class="input-block" type="text"
                      value={ ctrl.props.password() }
                      onchange={ m.withAttr('value', ctrl.props.password) } />
                  </dd>
                </dl>

              </div>

              <div class="one-half left">
                <h3>Last will</h3>

                <dl class="form">

                  <div class="flex-table">

                    <div class="flex-table-item flex-table-item-primary">
                      <dt><label>Topic</label></dt>
                      <dd>
                        <input class="input-block" type="text"
                          value={ ctrl.props.will.topic() }
                          onchange={ m.withAttr('value', ctrl.props.will.topic) } />
                      </dd>
                    </div>

                    <div class="flex-table-item">
                      <dt><label>QoS</label></dt>
                      <dd><RadioButtons value={ ctrl.props.will.qos } /></dd>
                    </div>

                    <div class="flex-table-item">
                      <dt><label>Retain</label></dt>
                      <dd><CheckButton class="btn" value={ ctrl.props.will.retain } /></dd>
                    </div>

                  </div>

                  <dt><label>Message</label></dt>
                  <dd class="full-width">
                    <textarea class="full-width"
                      value={ ctrl.props.will.data() }
                      onchange={ m.withAttr('value', ctrl.props.will.data) }>
                    </textarea>
                  </dd>
                </dl>
              </div>


              <div class="form-actions">
                <button type="button" class="btn btn-primary" onclick={ ctrl.connect.bind(this, ctrl.props) }>
                  Connect
                </button>
              </div>
            </form>

          </div>
    );
  },
};
