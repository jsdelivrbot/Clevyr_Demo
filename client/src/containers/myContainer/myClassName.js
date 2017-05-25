import React, { Component } from 'react';
import { harmonyConnect } from '../../base/features/harmony-redux-react-connect';
import * as actions from '../../actions/myContainer/actions_myContainer';

class myClassName extends Component {

    render () {
        return (
            <div>

            </div>
        );
    }
}

export default connect(myClassName,
    (state) => {
        return {

        }
    },
    {

    }
);