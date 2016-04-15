import React from 'react'
import { connect } from 'react-redux'

import { getItems } from 'ducks/main'


class ItemList extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    items: React.PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.handleChangeFilterType = this.handleChangeFilterType.bind(this)
  }

  handleChangeFilterType(e) {
    this.props.dispatch(getItems(e.target.value))
  }

  render() {
    return (<div>
      <h2>List</h2>
      <div className="filters">
        Type:
        <select onChange={this.handleChangeFilterType}>
          <option value=""></option>
          <option value="fruits">Fruits (loong API call)</option>
          <option value="vegetables">Vegetables (short API call)</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item, i) => {
            return (<tr key={i}>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td style={{ width: '100%' }}>{item.desc}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>)
  }
}


function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(ItemList)
