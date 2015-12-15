var Publish = { // eslint-disable-line no-unused-vars
  view : function() {
    return (
        <div>
          <div>
            <h2>Publish</h2>

            <form class="publish-form">
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

                  <div class="flex-table-item">
                    <dt>&nbsp;</dt>
                    <dd>
                      <button class="btn btn-primary" type="button">Publish</button>
                    </dd>
                  </div>
                </div>

                <dt class="content"><label>Message</label></dt>
                <dd>
                  <textarea></textarea>
                </dd>
              </dl>
            </form>
          </div>

          <div class="section">
            <h2>Messages</h2>

            <div class="message">
              <div class="properties clearfix">
                really-long-branch-name
              </div>
              <div class="content">
                <pre><code>some content</code></pre>
              </div>
            </div>

          </div>
        </div>
    );
  },
};
