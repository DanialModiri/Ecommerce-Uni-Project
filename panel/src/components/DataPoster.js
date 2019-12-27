import React from 'react';
import axios from 'axios';

class DataPoster extends React.Component {

    state = {
        data: null,
        loading: false
    }

    send = (data) => {
        console.log(data)
        this.setState({ loading: true }, () => {
            axios.post(this.props.url, data).then(res => {
                this.setState({ data: 'با موفقیت ثبت شد', loading: false })
            }).catch(err => {
                this.setState({ loading: false, error: true })
            })
        })
    }

    render() {
        return this.props.children({ send: this.send, loading: this.state.loading, data: this.state.data });
    }
}

export default DataPoster;