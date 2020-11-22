import React from 'react'

function MenuButton(props) {
    return (
        <>
    <button type="button" className="btn btn-secondary" style={{backgroundColor:'#FD5750'}}>{props.title}</button>
  </>
    )
}

export default MenuButton
