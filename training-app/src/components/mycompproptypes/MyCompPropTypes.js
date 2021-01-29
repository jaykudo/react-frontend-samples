import React from 'react'
import PropTypes from 'prop-types'

function MyCompPropTypes({str}) {
    return <div>{str}</div>
}

MyCompPropTypes.propTypes = {
    str:PropTypes.string,
    onClick:PropTypes.func.isRequired,
    obj:PropTypes.exact({
        age:PropTypes.number,
        name:PropTypes.string,
        gender:PropTypes.oneOf(['M', 'F']),
        birthdate:PropTypes.instanceOf(Date)
    })
}

export default MyCompPropTypes;