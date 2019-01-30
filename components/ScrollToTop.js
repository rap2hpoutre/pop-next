import React from "react";
import { withRouter } from 'next/router'

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.router.pathname !== prevProps.router.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
