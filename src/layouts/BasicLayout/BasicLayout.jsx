import React, { Component } from 'react'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
export default class BasicLayout extends Component {
  render() {
    return (
      <Layout style={{height:'100%'}}>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
