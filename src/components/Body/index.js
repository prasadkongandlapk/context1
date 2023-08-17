import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const leftNavBar = () => (
        <div className="leftnav-bg">
          <h1>Left Navbar Menu</h1>
          <ul className="pad">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div>
      )

      const content = () => (
        <div className="context-bg">
          <h1>Content</h1>
          <p>
            Lorem ipsum dollar sit amet, Lorem,ipsum dollar sit amet Lorem,ipsum
            dollar sit amet
          </p>
        </div>
      )

      const rightNavbar = () => (
        <div className="leftnav-bg">
          <h1>Right Navbar Menu</h1>
          <p className="add">Ad 1</p>
          <p className="add">Ad 2</p>
        </div>
      )

      const result = () => {
        if (showLeftNavbar === true) {
          return leftNavBar()
        }
        if (showContent === true) {
          return content()
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
