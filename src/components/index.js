import ConfirmBox from './ConfirmBox'
import Message from './Message'
import StaticTextField from './StaticTextField'
import SwitchField from './SwitchField'
import StaticTextArea from './StaticTextArea'

const install = (Vue) => {
  Vue.component(ConfirmBox.name, ConfirmBox)
  Vue.component(Message.name, Message)
  Vue.component(StaticTextField.name, StaticTextField)
  Vue.component(SwitchField.name, SwitchField)
  Vue.component(StaticTextArea.name, StaticTextArea)
}

export default install
