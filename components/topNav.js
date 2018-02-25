import React, {Component} from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class bugNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu>
        <Menu.Menu>
        <h2>Bug Reporting Sheet</h2>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item name='Create' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='Archives' active={activeItem === 'archives'} onClick={this.handleItemClick} />
        </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default connect(mapStateToProps)(bugNav);
