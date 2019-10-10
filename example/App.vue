<template>
  <div id="app">
    <tree-table :columns="columns" :data="data" show-checkbox />
  </div>
</template>

<script>
import TreeTable from '../src'

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
          key: 'gender'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '年龄',
          key: 'age1'
        },
        {
          title: '年龄',
          key: 'age2'
        },
        {
          title: '年龄',
          key: 'age3'
        }
      ],
      data: [
        {
          name: '老王1',
          gender: '男',
          age: 50,
          age1: 46,
          age2: 46,
          age3: 46,
          expand: true,
          disabled: true,
          children: [
            {
              name: '老王1-1',
              gender: '男',
              age: 46,
              age1: 46,
              age2: 46,
              age3: 46,
              checked: true
            },
            {
              name: '老王1-2',
              gender: '男',
              age: 53,
              age1: 46,
              age2: 46,
              age3: 46,
              expand: true,
              children: [
                {
                  name: '老王1-2-1',
                  gender: '男',
                  age: 51,
                  age1: 46,
                  age2: 46,
                  age3: 46,
                  checked: true
                }
              ]
            }
          ]
        },
        {
          name: '小明1',
          gender: '男',
          age: 24,
          age1: 46,
          age2: 46,
          age3: 46
        },
        {
          name: '小红1',
          gender: '女',
          age: 22,
          age1: 46,
          age2: 46,
          age3: 46
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

