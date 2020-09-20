import React from 'react';
import {connect} from 'react-redux'

const CountDisplay = ({count}) => {
    return (
        <h1>Count: {count}</h1>
    );
};

const mapStateToProps = state => ({
    count: state.counter
});
export default connect(mapStateToProps)(CountDisplay);
