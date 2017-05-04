import React from 'react';

class Main extends React.Component {
    render() {
        return (
          <div>
            <div className="row">
              <div className="column small-centered medium-6 large-4">
                <h1>Learn React</h1>
                {/* Router tarafından gelen bileşen aşağıda görüntülenecek. */}
                {this.props.children}
              </div>
            </div>
          </div>
        );
    }
}

export default Main;
