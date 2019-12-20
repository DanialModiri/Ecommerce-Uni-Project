import { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

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
                if (err.response)
                    return this.setState({
                        error: err.response.data,
                        loading: false
                    });
                this.setState({ error: err.message });
            });
        })
    }

    componentWillReceiveProps(nextProps) {
        const nextObj = {...nextProps, children: undefined};
        const currentObj = {...this.props, children: undefined};
        if(_.isEqual(nextObj, currentObj))
            return;
        this.setState({ loading: true }, () => {
            axios.get(this.props.url, { params: this.props.params }).then(res => {
                this.setState({
                    data: res.data,
                    loading: false
                });
            }).catch(err => {
                if (err.response)
                    return this.setState({
                        error: err.response.data,
                        loading: false
                    });
                this.setState({ error: err.message });
            });
        })
    }

    render() {
        return this.props.children(this.state);
    }
}

export default DataGetter;