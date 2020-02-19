import React, { Component, useEffect } from 'react'
import { Input, List, Avatar, Card, Button, Skeleton } from 'antd';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'
import todolistActions from '../../store/todolist/todolistAction'
const { Search } = Input;
class Todolist extends Component {
  state = {
    list: [
      { plan: 'java', complete: false }
    ]
  }
  componentDidMount() {
    console.log(this.props)
  }
  addPlan = (value) => {
    this.props.incrementPlan({ plan: value, complete: false })
  }
  deletePlan = (index) => {
    this.props.asyncDecrementPlan(index)
  }

  render() {
    console.log(this.props)

    return (
      <Card>
        <Search
          placeholder="添加计划"
          enterButton="add"
          size="large"
          onSearch={this.addPlan}
        />
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item
              actions={[<a key="list-loadmore-edit" onClick={() => this.deletePlan(index)}>删除</a>, <a key="list-loadmore-more">完成</a>]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.plan}</a>}
                  description=""
                />
                <div>{item.plan}</div>
              </Skeleton>
            </List.Item>
          )}
        />

      </Card>
    )
  }
}

// let a = createSelector(
//   (todolist) => todolist.k,//拿到传递过来的todolist对象内的东西
//   (k) => (k[0] * 4)//依据上面传递的东西计算出你想要的结果
// )(state.todolist)

export default connect(state => {
  //state.todolist这个对象的
  return {
    ...state.todolist,
    my: createSelector(
      (todolist) => todolist.k,//拿到传递过来的todolist对象内的东西
      (k) => (k[2] * 4)//依据上面传递的东西计算出你想要的结果
    )(state.todolist)
  }
}, todolistActions)(Todolist)

