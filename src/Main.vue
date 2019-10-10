<template>
  <div>
    <div :style="{
          fontSize:'14px',
          fontWeight:'bold',
          background: titleBackgroundColor,
          padding:'6px 0'
      }">
      <span :style="{
        paddingLeft: (i === 0 ? (showCheckbox ? '46px' : '18px') : '0'),
        width: i === 0 ? (item.width || (treeWidth - usedWidth) / (columns.length - widthCount) + (showCheckbox ? 4 : 0) + 'px') : (item.width || (treeWidth - usedWidth) / (columns.length - widthCount)) - 4 + 'px',
        display: 'inline-block',
        textAlign: item.align
      }" v-for="(item,i) in columns" :key="item.key">{{item.title}}</span>
    </div>
    <Tree id="tree-table" :data="treeData" :show-checkbox="showCheckbox" @on-check-change="handleCheckChange" @on-toggle-expand="handleToggleExpand" ></Tree>
  </div>
</template>

<script>
const ARROW_WIDTH = 12;
const CHECKBOX_WIDTH = 24;
const LEVEL_PADDING_WIDTH = 18;

export default {
  name: 'tree-table',
  data() {
    return {
      treeWidth: 0
    }
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    expandKey: {
      type: String,
      default: 'expand'
    },
    checkedKey: {
      type: String,
      default: 'checked'
    },
    disableCheckboxKey: {
      type: String,
      default: 'disableCheckbox'
    },
    disabledKey: {
      type: String,
      default: 'disabled'
    },
    titleBackgroundColor: {
      type: String,
      default: '#E8E8E8'
    }
  },
  computed: {
    treeData() {
      return this.data.map(item => {
        return this.dataToTreeData(item)
      })
    },
    usedWidth() {
      let usedWidth = 0
      this.columns.forEach(col => {
        if (col.width) {
          usedWidth += col.width
        }
      })
      return usedWidth;
    },
    widthCount() {
      let widthCount = 0
      this.columns.forEach(col => {
        if (col.width) {
          widthCount += 1
        }
      })
      return widthCount;
    }
  },
  methods: {
    dataToTreeData(item, level = 0) {
      let obj = {
        checked: item[this.checkedKey],
        expand: item[this.expandKey],
        disableCheckbox: item[this.disableCheckboxKey],
        disabled: item[this.disabledKey],
        render: h => {
          return this.columns.map((col, index) => {
            let width = 'auto'
            if (index === 0) {
              width = col.width ?
                (col.width - ARROW_WIDTH - (this.showCheckbox ? CHECKBOX_WIDTH : 0) - level * LEVEL_PADDING_WIDTH) :
                (this.treeWidth - this.usedWidth) / (this.columns.length - this.widthCount ) - ARROW_WIDTH - (this.showCheckbox ? CHECKBOX_WIDTH : 0) - level * LEVEL_PADDING_WIDTH
            } else {
              width = col.width || ((this.treeWidth - this.usedWidth) / (this.columns.length - this.widthCount))
            }
            return h('span', {
              style: {
                textAlign: col.align,
                display: 'inline-block',
                verticalAlign: 'middle',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                width: width - 4 + 'px'
              }
            }, item[col.key])
          })
        }
      }
      if (item[this.childrenKey] && item[this.childrenKey].length) {
        obj.children = item[this.childrenKey].map(child => {
          return this.dataToTreeData(child, level + 1)
        })
      }
      return obj
    },
    handleResize() {
      this.treeWidth = document.getElementById('tree-table').offsetWidth
    },
    handleCheckChange(selection) {
      this.$emit('on-check-change', selection)
    },
    handleToggleExpand(node) {
      this.$emit('on-toggle-expand', node)
    }
  },
  mounted() {
    this.treeWidth = document.getElementById('tree-table').offsetWidth
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

