import React from "react";
import NotFound from "../components/NotFound";
import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../components/Layout";

export default class Error extends React.Component {
  static getInitialProps({ res, err, statusCode }) {
    statusCode = statusCode || (res ? res.statusCode : err ? err.statusCode : null);
    return { statusCode };
  }

  render() {
    if (this.props.statusCode && this.props.statusCode === 404) {
      return (
        <Layout>
          <NotFound />
        </Layout>
      );
    }
    return (
      <Layout>
        <ErrorBoundary />
      </Layout>
    );
  }
}
