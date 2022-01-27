import slidecontent from './slidecontent.vue'

export default {
  title: 'slidecontent',
  component: slidecontent
}
export const Primary = () => ({
  components: { slidecontent },
  template: '<slidecontent />'
})
