import React from 'react';
import {login} from "../actions";
import {connect} from 'react-redux'

const LoginButton = ({text, login }) => {
    return (
        <button onClick={login}>
            {text}
        </button>
    );
};

const mapStateToProps = state => ({
    text: state.isLogged ? 'Logout' : 'Login'
});
const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
