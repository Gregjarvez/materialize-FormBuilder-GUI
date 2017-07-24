import React from "react"

class InputFactory extends React.Component {
    constructor(props){
        super(props);
        
    }

    setToolTip() {
        return this.setState({tooltip : true});
    }

    removeTooltip() {
        return this.setState({tooltip: false});
    }

    destruct(id) {
        return this.props.del(id)
    }


    handleSubmit(data){
        let prop;
        for( prop in data){
            this.setState({[prop] : data[prop]})
        }
        return false;
    }
    
    
    constructSetting(object, array){
        let BuildData = Object.assign({}, object);
        array.forEach((each, index) => delete BuildData[each]);
        return BuildData;
    }

    render(){
        return null;
    }
}
export default InputFactory