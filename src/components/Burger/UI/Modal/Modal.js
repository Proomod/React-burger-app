import React, { Component } from 'react';
import Aux from '../../../../hoc/Aux/Aux';
import classes from './Modal.module.css';
import BackDrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;

    }

    render() {
        return (
            <Aux>
                <BackDrop
                    show={this.props.show} goBack={this.props.clicked} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-140vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}

                </div>

            </Aux>
        )
    }





}

export default Modal;