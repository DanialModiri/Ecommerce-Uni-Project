import { Component } from 'react';
import axios from 'axios';

class DataGetter extends Component {

    state = {
        data: null,
        loading: false,
        error: null
    }

    componentWillMount() {
        this.setState({ loading: true }, () => {
            axios.get(this.props.url, { params: this.props.params }).then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                });
            }).catch(err => {
                this.setState({
                    error: err.response.data,
                    loading: false
                });
            });
        })
    }

    componentWillReceiveProps() {
        this.setState({ loading: true }, () => {
            axios.get(this.props.url, { params: this.props.params }).then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                });
            }).catch(err => {
                this.setState({
                    error: err.response.data,
                    loading: false
                });
            });
        })
    }

    render() {
        return this.props.children(this.state);
    }
}

export default DataGetter;