import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationControl = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContext,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onShowContent = () => {
        onToggleShowContext()
      }

      const onShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-bg">
          <h3>Layout</h3>
          <div className="check-bg">
            <input
              value={showContent}
              id="context"
              type="checkbox"
              onClick={onShowContent}
            />
            <label htmlFor="context">Context</label>
          </div>
          <div className="check-bg">
            <input
              value={showLeftNavbar}
              id="left"
              type="checkbox"
              onClick={onShowLeftNavbar}
            />
            <label htmlFor="left">Left Navbar</label>
          </div>
          <div className="check-bg">
            <input
              value={showRightNavbar}
              id="right"
              type="checkbox"
              onClick={onShowRightNavbar}
            />
            <label htmlFor="right">Right NavBar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationControl
