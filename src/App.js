import {Component} from 'react'
import Layout from './components/Layout'
import ConfigurationController from './components/ConfigurationController'
import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

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
