import { Button, TextField } from '@mui/material'
import React from 'react'

const Addb = () => {
  return (
    <div style={{paddingTop:"50px"}}>
        <TextField variant='outlined' label=' Blog Name'/><br /><br />
        <TextField variant='outlined' label=' Description'/><br /><br />
        <TextField variant='outlined' label=' Author Name'/><br /><br />
        <Button variant='contained' color='success'>ADD</Button>
    </div>
  )
}

export default Addb