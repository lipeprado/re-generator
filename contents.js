const fullComponent = name => (
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

const stateLess = name => (
  `
        import React from 'react';
    import PropTypes from 'prop-types';
    
    const ${name} = props => {
        return (
            <div>Component ${name}</div>
        );
    };
    
    ${name}.propTypes = {
        
    };
    
    export default ${name};
        `
);

module.exports = { fullComponent, stateLess };

