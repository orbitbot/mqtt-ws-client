var Connection = { // eslint-disable-line no-unused-vars
  view : function() {
    return (
          <div>
            <div>
              <div class="flex-table">
                <div class="flex-table-item flex-table-item-primary">
                  <h2>Connection</h2>
                </div>

                <div class="flex-table-item">
                  <button type="button" class="btn btn-danger" style="top: 0.7em;">Disconnect</button>
                </div>
              </div>

              <div class="connect-form clearfix">
                <div class="one-half left broker">
                  <h3>Broker</h3>

                  <dl class="form">

                    <div class="flex-table">

                      <div class="flex-table-item flex-table-item-primary">
                        <dt><label>URL</label></dt>
                        <dd><input class="input-block" type="text" value="http://example.com" readonly /></dd>
                      </div>

                      <div class="flex-table-item">
                        <dt><label>Port</label></dt>
                        <dd><input class="input" type="text" value="8882" readonly /></dd>
                      </div>

                      <div class="flex-table-item">
                        <dt><label>SSL</label></dt>
                        <dd>
                          <button class="btn inline btn-outline disabled" type="button">
                            <span class="octicon octicon-check"></span>
                          </button>
                        </dd>

                      </div>
                    </div>

                    <div class="input-group">
                      <label class="inline">Clean session</label>
                      <button class="btn inline btn-outline disabled" type="button">
                        <span class="octicon octicon-check"></span>
                      </button>

                      <label class="inline">Keepalive</label>
                      <input class="input inline" type="text" value="32" readonly />
                    </div>

                    <dt><label>ClientId</label></dt>
                    <dd><input class="input-block" type="text" value="strRadnom-123123" readonly /></dd>

                    <dt><label>Username</label></dt>
                    <dd><input class="input-block" type="text" value="booboo" readonly /></dd>

                    <dt><label>Password</label></dt>
                    <dd><input class="input-block" type="text" value="mellon" readonly /></dd>
                  </dl>

                </div>

                <div class="one-half left">
                  <h3>Last will</h3>

                  <dl class="form">

                    <div class="flex-table">

                      <div class="flex-table-item flex-table-item-primary">
                        <dt><label>Topic</label></dt>
                        <dd><input class="input-block" type="text" value="bye/bye/topic" readonly /></dd>
                      </div>

                      <div class="flex-table-item">
                        <dt><label>QoS</label></dt>
                        <dd>
                          <button class="btn btn-outline disabled" type="button">0</button>
                        </dd>
                      </div>

                      <div class="flex-table-item">
                        <dt><label>Retain</label></dt>
                        <dd>
                          <button class="btn btn-outline disabled" type="button">
                            <span class="octicon octicon-check"></span>
                          </button>
                        </dd>
                      </div>

                    </div>

                    <dt><label>Message</label></dt>
                    <dd class="full-width">
                      <textarea class="full-width" readonly>get lost</textarea>
                    </dd>
                  </dl>
                </div>

              </div>

            </div>

            <div class="section">
              <h2>Add subscription</h2>

              <form class="subscribe-form">
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
                      <dt>&nbsp;</dt>
                      <dd>
                        <button class="btn btn-primary" type="button">Subscribe</button>
                      </dd>
                    </div>
                  </div>
                </dl>
              </form>
            </div>

            <div class="section">
              <h2>Subscriptions</h2>

              <div class="subscription">
                <div class="flex-table">

                  <div class="flex-table-item flex-table-item-primary">
                    <dt><label>Topic</label></dt>
                    <dd><input class="input-block" type="text" value="some/topic" readonly /></dd>
                  </div>

                  <div class="flex-table-item">
                    <dt><label>QoS</label></dt>
                    <dd>
                      <button class="btn btn-outline disabled" type="button">2</button>
                    </dd>
                  </div>

                  <div class="flex-table-item">
                    <dt>&nbsp;</dt>
                    <dd>
                      <button class="btn btn-danger" type="button">Unsubscribe</button>
                    </dd>
                  </div>
                </div>
              </div>

              <div class="subscription">
                <div class="flex-table">

                  <div class="flex-table-item flex-table-item-primary">
                    <dd><input class="input-block" type="text" value="this/topic" readonly /></dd>
                  </div>

                  <div class="flex-table-item">
                    <dd>
                      <button class="btn btn-outline disabled" type="button">0</button>
                    </dd>
                  </div>

                  <div class="flex-table-item">
                    <dd>
                      <button class="btn btn-danger" type="button">Unsubscribe</button>
                    </dd>
                  </div>
                </div>
              </div>

              <div class="subscription">
                <div class="flex-table">

                  <div class="flex-table-item flex-table-item-primary">
                    <dd><input class="input-block" type="text" value="interesting/topic" readonly /></dd>
                  </div>

                  <div class="flex-table-item">
                    <dd>
                      <button class="btn btn-outline disabled" type="button">1</button>
                    </dd>
                  </div>

                  <div class="flex-table-item">
                    <dd>
                      <button class="btn btn-danger disabled" type="button">Unsubscribe</button>
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  },
};
