import React from "react";
import App, { Container } from "next/app";
import NProgress from "next-nprogress/component";
import Router from "next/router";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    // console.log(window.location.pathname);
    Router.events.on("routeChangeStart", url => {
      window._paq.push(["setDocumentTitle", document.title]);
      // push(["setCustomUrl", currentPath]);
      window._paq.push(["trackPageView"]);
      console.log(`raven & piwik : ${url}`);
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NProgress />
        <Component {...pageProps} />
      </Container>
    );
  }
}
