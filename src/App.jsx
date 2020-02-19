import React from 'react'
import Routes from './router/index'
import BasicLayout from './layouts/BasicLayout/BasicLayout'

export default function App(props) {
  console.log(props)
  return (
    <BasicLayout>
      {Routes}
    </BasicLayout>
  )

}