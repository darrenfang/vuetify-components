# vuetify-components
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/darrenfang/vuetify-components/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/vuetify-components.svg?style=flat)](https://www.npmjs.com/package/vuetify-components)
[![CircleCI](https://img.shields.io/circleci/project/github/darrenfang/vuetify-components.svg)](https://circleci.com/gh/darrenfang/vuetify-components)

UI components for Vuetify.js

## Installation

```shell
npm install --save vuetify-components

or

yarn add vuetify-components
```

```js
import Vue from 'vue'
import VuetifyComponents from 'vuetify-components'
import 'vuetify-components/src/stylus/main.styl'

Vue.use(VuetifyComponents)
```

## Usage

Once installed, it can be used in a template as simply as:


### MessageBox

#### Examples

```html
<v-message
        v-model="message"
        text="Show Message!"
        :timeout="5000"
        color="success"
        @close="closeHandler">
</v-message>
```

#### Properties

|      Name       |  Type   | Default Value |              Description                |
| --------------- | ------- | ------------- | --------------------------------------- |
| display (model) | Boolean | false         | Controls visibility.                    |
| text            | string  |               | Sets text.                              |
| timeout         | Number  | 0             | Time (in milliseconds) to wait until snackbar is automatically hidden. Use 0 to keep open indefinitely. |
| color           | string  | info          | Applies specified color to the control. |
| mode            | string  | vertical      | Sets snackbar display mode. Available options are vertical and multi-line.  |
| closeText       | string  | Close         | Sets the text of the button.            |

#### Events

|    Name    |     Arguments      |       Description        |
| -----------| -------------------| ------------------------ |
| close      | display (Boolean)  | The close event          |


### ConfirmBox

#### Examples

```html
<v-confirm-box
        v-model="confirmBox"
        title="Confirm Box Title"
        text="Confirm Box Text"
        :width="500"
        :cancel="cancelHandler"
        :ok="okHandler">
</v-confirm-box>
```

#### Properties

|       Name      |   Type   | Default Value |                   Description                    |
| --------------- | -------- | ------------- | ------------------------------------------------ |
| display (model) | Boolean  | false         | Controls visibility.                             |
| title           | string   |               | Sets title.                                      |
| text            | string   |               | Sets text.                                       |
| width           | Number   | 400           | Sets the confirm box width.                      |
| cancelText      | string   | CANCEL        | Sets the text of the cancel button.              |
| okText          | string   | OK            | Sets the text of the ok button.                  |
| cancel          | Function |               | Sets the handler when the cancel button clicked. |
| ok              | Function |               | Sets the handler when the ok button clicked.     |
| danger          | Boolean  | true          | Sets the color of the ok button to danger.       | 

#### Events

|    Name    |     Arguments      |       Description        |
| -----------| -------------------| ------------------------ |
| hide       | display (Boolean)  | The hide event           |


### StaticTextField

#### Examples

```html
<v-static-text-field
        :loading="loading"
        label="static text field"
        value="value"
        hint="hint"
        :counter="20"
        :persistentHint="true">
</v-static-text-field>
```

#### Properties

|      Name      |   Type   | Default Value |                   Description                    |
| -------------- | -------- | ------------- | ------------------------------------------------ |
| label          | string   |               | Sets input label.                                |
| value          | string   |               | Input value.                                     |
| hint           | string   |               | Hint text.                                       |
| counter        | Number   |               | Creates counter for input length.                |
| persistentHint | Boolean  |               | Forces hint to always be visible.                |
| loading        | Boolean  |               | Displays linear progress bar.                    |
| progressColor  | string   | primary       | Applies specified color to the progress control. |
| progressWidth  | Number   | 3             | Sets the stroke of the circle in pixels/         |


### SwitchField

#### Examples

```html
<v-switch-field
        label="readonly switch field"
        :loading="loading"
        value="value"
        :readonly="true"
        :checked="false">
</v-switch-field>
```

#### Properties

|      Name     |   Type   | Default Value |                    Description                     |
| ------------- | -------- | ------------- | -------------------------------------------------- |
| label         | string   |               | Sets input label.                                  |
| text          | string   |               | Sets the text of the selection control component.  |
| loading       | Boolean  |               | Displays linear progress bar.                      |
| disabled      | Boolean  |               | Input is disabled.                                 |
| value (model) | Boolean  |               | Sets the value of the selection control component. |
| readonly      | Boolean  | false         | Puts input in readonly state.                      |
| progressColor | string   | primary       | Applies specified color to the progress control.   |
| progressWidth | Number   | 3             | Sets the stroke of the circle in pixels/           |

#### Events

|    Name    |     Arguments      |                      Description                       |
| -----------| -------------------| ------------------------------------------------------ |
| change     | checked (Boolean)  | Emitted when the input is changed by user interaction. |
