import React from 'react'
import { Navbar, Footer } from '../components'
import { LayoutProps } from './layout.props'
import {Box} from "@mui/material"
const index = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={'90vh'}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default index
