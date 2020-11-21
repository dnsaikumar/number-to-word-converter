import React from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../../../actions/actions'
import lettersMap from '../../../util/lettersMap'

import PropTypes from 'prop-types';

export const Button = (props) => (
  <button className='btn btn-light' style={{ border: '1px solid #EEE', margin: 'auto' }} onClick={() => props.addNumber(props.number)} >
    {props.number}<br />
    {lettersMap[props.number]}
  </button>
)

Button.propTypes = {
  number : PropTypes.number.isRequired,
  addNumber : PropTypes.func.isRequired
}

const mapDispatchToProps = {
  addNumber
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
