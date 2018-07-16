import ConfirmBox from './ConfirmBox'
import Message from './Message'
import StaticTextField from './StaticTextField'
import SwitchField from './SwitchField'

const install = (Vue) => {
  Vue.component('v-confirm-box', ConfirmBox)
  Vue.component('v-message', Message)
  Vue.component('v-static-text-field', StaticTextField)
  Vue.component('v-switch-field', SwitchField)
}

export default install
