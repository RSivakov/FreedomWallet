import React, { Component } from 'react'
import { View } from 'react-native'
import { BottomNavigation, BottomNavigationIcon } from 'carbon-ui'

class BottomNav extends Component {
  state = { activeTab: 'Stats' }

  _navigate = activeTab => this.setState({ activeTab })

  render() {
    const { activeTab } = this.state
    return (
      <BottomNavigation>
        <BottomNavigationIcon
          name="launch"
          text="Send"
          active={activeTab === 'Send'}
          onPress={() => this._navigate('Send')} />
        <BottomNavigationIcon
          name="get_app"
          text="Receive"
          active={activeTab === 'Receive'}
          onPress={() => this._navigate('Receive')} />
        <BottomNavigationIcon
          name="euro_symbol"
          text="Buy"
          active={activeTab === 'Buy'}
          onPress={() => this._navigate('Buy')} />
        <BottomNavigationIcon
          name="list"
          text="Stats"
          active={activeTab === 'Stats'}
          onPress={() => this._navigate('Stats')} />
      </BottomNavigation>
    )
  }
}

export default BottomNav