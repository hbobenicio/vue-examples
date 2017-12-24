import Vue from 'vue'
import Header from '@/components/Header.vue'

export function install(vue, options) {
  vue.component(Header.name, Header)
}

export default {
  install,
  [Header.name]: Header
}
