import React from 'react'
import { connect } from 'react-redux'

import './App.scss'

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node,
    ]),
    dispatch: React.PropTypes.any,
  }

  componentDidMount() {
    // const { dispatch } = this.props
    // dispatch(initContext(this.props.params))
  }

  render() {
    return (
      <div className="container">
        <h1><a href="/">Redux Ordering Problem</a></h1>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
