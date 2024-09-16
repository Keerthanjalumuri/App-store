import {Component} from 'react'

import './index.css'

class TabItem extends Component {
  render() {
    const {tabId, displayText, clickTabItem, isActive} = this.props
    const changeTab = () => {
      clickTabItem(tabId)
    }
    const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
    return (
      <li className="tab-item-container">
        <button
          className={`tab-btn ${activeTabBtnClassName}`}
          type="button"
          onClick={changeTab}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
