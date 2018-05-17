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

module.exports = stateLess;
