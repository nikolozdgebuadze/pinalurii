import { MenuItem, Select } from '@mui/material'
import React from 'react'

export const Sort = ({sort,changeSort,changePage}) => {
  return (
    <Select value={sort} onChange={(e)=>{
        changeSort("sort",e.target.value)
        changePage("page",1)

        

    }}>
        <MenuItem value="price,desc">ფასის დაკლება</MenuItem>
        <MenuItem value="price,asc">ფასის გაზრდა</MenuItem>
        <MenuItem value="name,desc">სახელის დაკლება</MenuItem>
        <MenuItem value="name,asc">სახელის გაზრდა</MenuItem>

    </Select>
  )
}
