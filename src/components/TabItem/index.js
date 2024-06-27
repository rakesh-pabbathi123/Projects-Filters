import './index.css'

const TabItem = props => {
  const {eachTabItem, clickTabItem, isActive} = props

  const {tabId, displayText} = eachTabItem

  const isActiveClassNameStyle = isActive ? 'active-tab-btn ' : ''

  const onClickTabIButtonClicked = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="padding-right">
      <button
        type="button"
        className={`tab-btn ${isActiveClassNameStyle}`}
        onClick={onClickTabIButtonClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
