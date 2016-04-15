import React from 'react'
import { connect } from 'react-redux'

import Items from './Items'
import './App.scss'

class App extends React.Component {
  static propTypes = {
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
        <Items />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)
