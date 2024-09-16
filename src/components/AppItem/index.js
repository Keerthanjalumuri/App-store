import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  render() {
    const {appDetails} = this.props
    const {appName, imageUrl} = appDetails
    return (
      <li className="app-item-container">
        <img src={imageUrl} className="app-image" alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default AppItem
