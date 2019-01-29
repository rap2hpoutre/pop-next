import Search from "../../components/search/Search"

export default class extends React.Component {
  static async getInitialProps({ asPath }) {
    return { asPath }
  }
  render = () => <Search display="map" location={this.props.asPath}></Search>;
}
