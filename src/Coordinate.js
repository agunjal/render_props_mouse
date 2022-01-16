import React from 'react'
import PropTypes from 'prop-types'

const spanStyle = {
  display: 'block',
  fontSize: `${12 / 16}rem`,
  lineHeight: '1.5',
  textAlign: 'center'
}

const Coordinate = ({ x, y }) => (
  <span style={spanStyle}>
    Coordinates: <br />
    {`{ x: ${x}, y: ${y} }`}
  </span>
)

Coordinate.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number
}

export default Coordinate
