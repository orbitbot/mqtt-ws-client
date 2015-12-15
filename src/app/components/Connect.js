var Connect = { // eslint-disable-line no-unused-vars
  view : function() {
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
                      <dd><input class="input-block" type="text" /></dd>
                    </div>

                    <div class="flex-table-item">
                      <dt><label>Port</label></dt>
                      <dd><input class="input" type="text" value="8882" /></dd>
                    </div>

                    <div class="flex-table-item">
                      <dt><label>SSL</label></dt>
                      <dd><CheckButton class="btn inline" /></dd>
                    </div>
                  </div>

                  <div class="input-group">
                    <label class="inline">Clean session</label>
                    <CheckButton class="btn inline" />

                    <label class="inline">Keepalive</label>
                    <input class="input inline" type="text" />
                  </div>

                  <dt><label>ClientId</label></dt>
                  <dd><input class="input-block" type="text" /></dd>
                  <dt><label>Username</label></dt>
                  <dd><input class="input-block" type="text" /></dd>
                  <dt><label>Password</label></dt>
                  <dd><input class="input-block" type="text" /></dd>
                </dl>

              </div>

              <div class="one-half left">
                <h3>Last will</h3>

                <dl class="form">

                  <div class="flex-table">

                    <div class="flex-table-item flex-table-item-primary">
                      <dt><label>Topic</label></dt>
                      <dd><input class="input-block" type="text" /></dd>
                    </div>

                    <div class="flex-table-item">
                      <dt><label>QoS</label></dt>
                      <dd><RadioButtons /></dd>
                    </div>

                    <div class="flex-table-item">
                      <dt><label>Retain</label></dt>
                      <dd><CheckButton class="btn" /></dd>
                    </div>

                  </div>

                  <dt><label>Message</label></dt>
                  <dd class="full-width">
                    <textarea class="full-width"></textarea>
                  </dd>
                </dl>
              </div>


              <div class="form-actions">
                <button type="button" class="btn btn-primary">Connect</button>
              </div>
            </form>

          </div>
    );
  },
};
