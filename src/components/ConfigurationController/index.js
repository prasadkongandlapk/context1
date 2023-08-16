import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationControl = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const onShowContent = () => {
        this.setState(prevState => ({showContext: !prevState.showContent}))
      }
      const onShowLeftNavbar = () => {
        this.setState(prevState => ({
          showLeftNavbar: !prevState.showLeftNavbar,
        }))
      }
      const onShowRightNavbar = () => {
        this.setState(prevState => ({
          showRightNavbar: !prevState.showRightNavbar,
        }))
      }

      return (
        <div className="config-bg">
          <div className="check-bg">
            <input
              value=""
              id="context"
              type="checkbox"
              onChange={onShowContent}
            />
            <label htmlFor="context">Context</label>
          </div>
          <div className="check-bg">
            <input id="left" type="checkbox" onChange={onShowLeftNavbar} />
            <label htmlFor="left">Left Navbar</label>
          </div>
          <div className="check-bg">
            <input id="right" type="checkbox" onChange={onShowRightNavbar} />
            <label htmlFor="right">Right NavBar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationControl
