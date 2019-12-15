import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/Burger/UI/Modal/Modal';


const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            }
            this.resInstance = axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error })
            })
            this.reqInstance = axios.interceptors.request.use(req => req, error => {
                this.setState({ error: error })
            })


        }


        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInstance);
            axios.interceptors.response.eject(this.resInstance);
        }
        closeErrorHandler = () => {
            this.setState({
                error: null
            })

        }



        render() {

            return (
                <Aux>
                    <Modal show={this.state.error}
                        clicked={this.closeErrorHandler}>
                        {this.state.error ? this.state.error.message : null}

                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            )
        }
    }


}
export default withErrorHandler;