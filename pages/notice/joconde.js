import API from "../../services/api";
import Layout from "../../components/Layout"
import Joconde from "../../components/notices/Joconde"

export default class extends React.Component {
  static loadMuseo(m) {
    try {
      return API.getMuseo(m);
    } catch (e) {}
    return null;
  }
  static async getInitialProps({ query: { id } }) {
    const notice = await API.getNotice("joconde", id);
    const museo = notice && notice.MUSEO && (await this.loadMuseo(notice.MUSEO));
    return {
      notice,
      museo
    };
  }

  render() {
    return (
      <Layout>
        <Joconde notice={this.props.notice} museo={this.props.museo}></Joconde>
      </Layout>
    );
  }
}
