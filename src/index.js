import searchBox from './Main.vue'

searchBox.install = Vue => {
  Vue.component(searchBox.name, searchBox)
}

export default searchBox