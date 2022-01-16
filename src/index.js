import React from 'react'
import { render } from 'react-dom'
import Quadrant from './Quadrant'
import Mouse from './Mouse'
import './style.css'
import Coordinate from './Coordinate'
import PositionIndicator from './PositionIndicator'

const App = () => (
  <React.Fragment>
    <Mouse
      render={(mouse) => (
        <Quadrant bgColor="pink">
          <Coordinate {...mouse} />
          <PositionIndicator {...mouse} />
        </Quadrant>
      )}
    />
    <Mouse
      render={(mouse) => (
        <Quadrant bgColor="#666">
          <Coordinate {...mouse} />
          <PositionIndicator color="white" {...mouse} />
        </Quadrant>
      )}
    />
    <Mouse
      render={(mouse) => (
        <Quadrant bgColor="powderblue">
          <Coordinate {...mouse} />
          <PositionIndicator color="blue" {...mouse} />
        </Quadrant>
      )}
    />
    <Mouse
      render={(mouse) => (
        <Quadrant bgColor="yellow">
          <Coordinate {...mouse} />
          <PositionIndicator color="goldenrod" {...mouse} />
        </Quadrant>
      )}
    />
  </React.Fragment>
)

render(<App />, document.getElementById('root'))
