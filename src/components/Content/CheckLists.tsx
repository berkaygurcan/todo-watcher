import { List } from '@mui/material'
import React from 'react'
import CheckListItem from './CheckListItem'

const CheckLists = () => {
  return (
    <List>
        {/* Burada checklist ıtem sayısına göre map edilip checklist ıtemler listenelenecek */}
      <CheckListItem />
    </List>
  )
}

export default CheckLists
