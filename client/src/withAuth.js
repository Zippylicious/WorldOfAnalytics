import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function withAuth(ComponentToProtect) {
  return class extends Component {

    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      let self = this;
      axios.get("http://localhost:9000/user/token")
        .then(function(response) {
          if (response.status === 200) {
            self.setState({ loading: false });
          } else {
            const error = new Error(response.error);
            throw error;
          }
        })
        .catch(function(error) {
          console.error(error);
          self.setState({ loading: false, redirect: true });
        });
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  }
}