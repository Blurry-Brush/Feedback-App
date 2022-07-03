import React from 'react'
import PropsType from 'prop-types'

function Button({children, version ,type, isDisabled}){
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'submit',
    isDisabled: false,
}

Button.propsType = {
    
    children: PropsType.node.isRequired,
    version: PropsType.string,
    type: PropsType.string,
    isDisabled: PropsType.bool,



}

export default Button