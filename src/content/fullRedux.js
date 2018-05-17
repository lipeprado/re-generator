const fullRedux = name => (
  `
    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    
    class ${name} extends Component {
        render() {
            return (
                <div>Component ${name}</div>
            );
        }
    }
    
    ${name}.propTypes = {
    
    };
    
    export default ${name};`
);

module.exports = fullRedux;
