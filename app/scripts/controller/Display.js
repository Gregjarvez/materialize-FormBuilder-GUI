import React from "react";


class Display extends React.Component {
    constructor(props) {
        super(props);

        
    }


    render() {
        let {components} = this.props;
        let list = components.map((Component, index) => {
           return (
              <Component.embeddedComponent
                  key={index}
                  config={Component.configuration}
                  id={Component.id}
                  del={this.props.del}
              />
           )
        });
        
        return (
            <div className="display">
                {list}
            </div>
        );
    }
}


export default Display;