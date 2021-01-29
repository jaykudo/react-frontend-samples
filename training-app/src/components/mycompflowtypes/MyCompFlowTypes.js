import * as React from 'react'

type MyCompProps = {
    name:string,
    age?:Number,
    children:React.Node
}

MyCompFlowTypes.defaultProps = {
    name:"john",
    children: <div>default</div>
}

function MyCompFlowTypes(props:MyCompProps) {
    return <div>{props.children}</div>
}

export default MyCompFlowTypes;