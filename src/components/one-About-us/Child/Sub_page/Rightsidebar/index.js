import myHeader from 'Rightsidebar'//  ./表示当前目录，header表示header.vue（自动补全后缀）

const Header = {
  install : function (Vue) {
    Vue.component('ele-header', myHeader)
  }
}

export default Header
