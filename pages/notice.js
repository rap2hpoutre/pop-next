import "../styles/index.css";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

export default class extends React.Component {
  static async getInitialProps({ query: { id } }) {
    const res = await fetch(
      "http://pop-api-staging.eu-west-3.elasticbeanstalk.com/memoire/" + id
    );
    const notice = await res.json();
    console.log("loili");
    return {
      id,
      notice
    };
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.notice.TICO || this.props.notice.LEG}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <img src="/static/logo.png" alt="my image" />
        <h4>NOTICE {this.props.id}</h4>
        <pre>{JSON.stringify(this.props.notice)}</pre>
      </div>
    );
  }
}
