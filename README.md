# iview-table-tree

## 概述
`iview-table-tree`是基于`iview`组件库开发的树形表格。需要注意的是，`iview-table-tree`必须在安装了`iview`的基础上再安装使用。

## 安装
``` bash
npm install iview-table-tree --save
```

## 使用
``` vue
<template>
  <div id="app">
    <tree-table :columns="columns" :data="data" />
  </div>
</template>

<script>
import TreeTable from 'iview-table-tree'

export default {
  name: 'app',
  components: { TreeTable },
  data() {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'gender',
          align: 'center'
        },
        {
          title: '年龄',
          key: 'age',
          align: 'center'
        }
      ],
      data: [
        {
          name: '老王1',
          gender: '男',
          age: '50',
          children: [
            {
              name: '老王1-1',
              gender: '男',
              age: 46
            },
            {
              name: '老王1-2',
              gender: '男',
              age: 53,
              children: [
                {
                  name: '老王1-2-1',
                  gender: '男',
                  age: 51
                }
              ]
            }
          ]
        },
        {
          name: '小明1',
          gender: '男',
          age: 24
        },
        {
          name: '小红1',
          gender: '女',
          age: 22
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#app {
  padding: 12px;
}
</style>
```

## API

### props

属性|说明|类型|默认值
-|-|-|-
columns|树形表格列的配置描述，具体项见后文|Array|[]
data|显示的结构化数据|Array|[]
show-checkbox|是否显示多选框|Boolean|false
children-key|子节点字段名|String|children
expand-key|节点是否展开字段名|String|expand
disable-checkbox-key|是否禁掉checkbox字段名|String|disableCheckbox
disabled-key|是否禁掉响应字段名|String|disabled
title-background-color|表头标题背景色|String|#E8E8E8

### events

事件名|说明|返回值
-|-|-
on-check-change|点击复选框时触发时触发|当前已勾选节点的数组
on-toggle-expand|展开和收起子列表时触发|当前节点的数据

### column

属性|说明|类型|默认值
-|-|-|-
title|列头显示文字|String|-
key|对应列内容的字段名|String|-
width|列宽|Number|-
align|对齐方式，可选值为`left`左对齐、`right`右对齐、`center`居中对齐|String|left

### data
属性|说明|类型|默认值
-|-|-|-
columns定义的每一个key|显示的数据|[String, Number]|-
expand|是否展开子节点|Boolean|false
disabled|禁掉响应|Boolean|false
disableCheckbox|禁掉checkbox|Boolean|false
checked|是否勾选（如果勾选，子节点也会全部勾选）|Boolean|false
children|子节点属性数组|Array|-

注意：

data里的字段名，除了columns定义的key外，其它字段名根据props定义的字段名而定，以上只是默认值

## 联系
如有疑问，请联系邮件：4901061635@qq.com
