import React from 'react'

export const Message = (props) => {
  console.log(props);
  return (
    <div>
      {props.message}
    </div>
  )
}

export default Message;