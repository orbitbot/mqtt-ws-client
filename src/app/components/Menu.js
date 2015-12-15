var Menu = { // eslint-disable-line no-unused-vars
  view : function() {
    return (<nav class="menu left">
              <MenuItem class="menu-item" href="#/connect">
                <span class="octicon octicon-git-pull-request"></span>
                Add connection
              </MenuItem>
              <a class="menu-item" href="#/publish">
                <span class="octicon octicon-radio-tower"></span>
                <span class="counter">7</span>
                Messages
              </a>
              <a class="menu-item" href="#/broker/www.somehost.com">
                <span class="octicon octicon-git-commit"></span>
                <span class="counter">3</span>
                https://www.somehost.com
              </a>
              <a class="menu-item" href="#/publish">
                <span class="octicon"></span>
                <span class="counter">3</span>
                https://example.com
              </a>
              <MenuItem class="menu-item" href="#/publish">
                <span class="octicon octicon-git-commit"></span>
                SomeSite
              </MenuItem>
              <MenuItem class="menu-item one-half inline text-center" href="#/settings">
                Settings
              </MenuItem>
              <MenuItem class="menu-item one-half inline text-center" href="#/about">
                About
              </MenuItem>
            </nav>
    );
  },
};
