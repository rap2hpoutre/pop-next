import Search from "../../components/search/Search"

export default class extends React.Component {
  static async getInitialProps({ asPath }) {
    const location = asPath;
    return { location }
  }
  render = () => <Search display="mosaic" location={this.props.location}></Search>;
}
