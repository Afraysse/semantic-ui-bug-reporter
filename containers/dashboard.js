import React, {Component} from 'react'
import { Container, Button, Checkbox, Form, Header, Divider } from 'semantic-ui-react'

const projectOptions = [
  {key: 'sched', text: 'Scheduling', value: 'Scheduling'},
  {key: 'lm', text: 'Lab Monitoring', value: 'Lab Monitoring'},
  {key: 'ur', text: 'Utilization Reporting', value: 'Utilization Reporting'},
  {key: 'dg', text: 'Device Groups', value: 'Device Groups'},
  {key: 'reg', text: 'User Registration', value: 'User Registration'}
]

const priorityRating = [
  {key: 'vl', text: 'Very Low', value: 'Very Low'},
  {key: 'l', text: 'Low', value: 'Low'},
  {key: 'm', text: 'Medium', value: 'Medium'},
  {key: 'h', text: 'High', value: 'High'},
  {key: 'c', text: 'Critical', value: 'Critical'}
]

const webBrowser = [
  {key: 'ie11', text: 'IE 11', value: 'IE11'},
  {key: 'chrome', text: 'Chrome', value: 'chrome'},
  {key: 'firefox', text: 'Firefox', value: 'firefox'},
  {key: 'safari', text: 'Safari', value: 'safari'}
]

const opSys = [
  {key: 'Mac OS', text: 'Mac OS', value: 'Mac OS'},
  {key: 'Windows', text: 'Windows', value: 'Windows'}
]

class bugFormatLayout extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({value})

  render() {
    const {value} = this.state
    return (
    <Container style={{ marginTop: '3em '}}>
    <Header as='h1' dividing>TetraScience Bug Reporting Form</Header>
    <Form>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Internal Reporter' placeholder='Internal Name' />
        <Form.Input fluid label='External Reporter' placeholder='External Name' />
        <Form.Input fluid label='External Reporter Company' placeholder='Company Name' />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Select fluid label='Product' options={projectOptions} placeholder='Scheduling' />
        <Form.Select fluid label='Priority' options={priorityRating} placeholder='Priority' />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Select fluid label='Web Browser' options={webBrowser} placeholder='Web Browser' />
        <Form.Select fluid label='Operating System' options={opSys} placeholder='Operating System' />
      </Form.Group>
      <Form.Group inline>
        <label>Suggested Fix Time</label>
        <Form.Radio label='Today' value='today' checked={value === 'today'} onChage={this.handleChange} />
        <Form.Radio label='Current Sprint' value='current_sprint' checked={value === 'current_sprint'} onChage={this.handleChange} />
        <Form.Radio label='1 - 2 Weeks' value='1-2' checked={value === '1-2'} onChange={this.handleChange} />
        <Form.Radio label='1 Month' value='1-m' checked={value === '1-m'} onChange={this.handleChange} />
        <Form.Radio label='Time Permits' value='time_permits' checked={value === 'time_permits'} onChange={this.handleChange} />
      </Form.Group>
      <Form.Input fluid label='Bug Title' placeholder='Unable to log into...' />
      <Form.TextArea label="Bug Description" placeholder="Describe what happened." />
    </Form>


    </Container>
    )
  }
}

export default bugFormatLayout
