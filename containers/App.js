import React from 'react'
import { Container, Grid, Header, Divider } from 'semantic-ui-react'

const ThemingLayout = () => (
  <Container style={{ marginTop: '3em '}}>
  <Header as='h1' dividing>Bug Reporting Form</Header>

  <Grid columns={3} stackable>
    <Grid.Column>
      <Header as='h1'>My Name is Annie</Header>
      <Header as='h4'>Fraysse</Header>

    <p>
    I was born in sunny California on a cool January afternoon.
    </p>
    </Grid.Column>

    <Grid.Column>
      <Header as='h2'>Lets all catch bugs!</Header>

      <p>
      Bugs are no longer just a nusiance; they are a way of life. Or so you might hear a QA say.
      </p>
      <p>
        <small>Bugs can be very very small!</small>
      </p>
      <p>Bugs can also be <strong>very bold!</strong>.</p>
      <p>Bugs can be <em>sneaky</em>!</p>
      <p>Bugs can also not be <abbr title='bugs'>bgs</abbr> at all!</p>
    </Grid.Column>

    <Grid.Column>
      <Grid
        centered
        columns={3}
        padded
        stackable
        style={{ margin: '-1.5em', width: 400 }}
        textAlign='middle'
      >
      <Grid.Column color='red' style={{ margin: '0.5em', height: 50 }}>Red</Grid.Column>
      <Grid.Column color='orange' style={{ margin: '0.5em', height: 50 }}>Orange</Grid.Column>
      <Grid.Column color='yellow' style={{ margin: '0.5em', height: 50 }}>Yellow</Grid.Column>
      </Grid>
    </Grid.Column>
  </Grid>
</Container>
)

export default ThemingLayout
