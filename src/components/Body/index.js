import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const leftNavBar = () => (
        <div className="leftnav-bg">
          <h3>Left Navbar Menu</h3>
          <div className="pad">
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            <p>item 4</p>
          </div>
        </div>
      )

      const context = () => (
        <div className="context-bg">
          <h3>Context</h3>
          <p>
            Lorem,ipsum dollar sit amet Lorem,ipsum dollar sit amet Lorem,ipsum
            dollar sit amet
          </p>
        </div>
      )

      const rightNavbar = () => (
        <div className="leftnav-bg">
          <h3>Context</h3>
          <p className="add">Add 1</p>
          <p>Add 2</p>
        </div>
      )
      const result = () => {
        if (showLeftNavbar === true) {
          return leftNavBar()
        }
        if (showContent === true) {
          return context()
        }
        if (showRightNavbar === true) {
          return rightNavbar()
        }
        return null
      }

      return <div className="body-bg">{result()}</div>
    }}
  </ConfigurationContext.Consumer>
)

export default Body
