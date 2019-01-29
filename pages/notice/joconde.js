import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Layout from "../../components/Layout"

export default class extends React.Component {
  static async getInitialProps({ query: { id } }) {
    const res = await fetch(
      "http://pop-api-staging.eu-west-3.elasticbeanstalk.com/joconde/" + id
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
      <Layout>
        <Head>
          <title>{this.props.notice.TICO || this.props.notice.LEG}</title>
        </Head>
        <h4>NOTICE {this.props.id} JOCONDE</h4>
        <h3>{this.props.notice.TICO}</h3>
        <div>{JSON.stringify(this.props.notice)}</div>
      </Layout>
    );
  }
}
