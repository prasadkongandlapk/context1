import {Component} from 'react'
import Layout from './components/Layout'
import ConfigurationController from './components/ConfigurationController'
import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(prevState => ({showContext: !prevState.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({
      showLeftNavbar: !prevState.showLeftNavbar,
    }))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({
      showRightNavbar: !prevState.showRightNavbar,
    }))
  }

  render() {
    return (
      <div className="bg">
        <ConfigurationController />
        <Layout />
      </div>
    )
  }
}

export default App
