<template>
    <v-snackbar
            v-model="display"
            :timeout="timeout"
            :color="color"
            :multi-line="mode === 'multi-line'"
            :vertical="mode === 'vertical'"
            @input="inputHandler">
        <span v-html="displayText"></span>
        <v-btn dark flat @click="closeHandler">{{closeText}}</v-btn>
    </v-snackbar>
</template>

<script>
  export default {
    name: 'v-message',
    model: {
      prop: 'value',
      event: 'close'
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        required: true
      },
      timeout: {
        type: Number,
        default: 10
      },
      color: {
        type: String,
        default: 'info'
      },
      mode: {
        type: String,
        default: 'vertical'
      },
      closeText: {
        type: String,
        default: 'Close'
      }
    },
    data () {
      return {
        display: false
      }
    },
    computed: {
      displayText () {
        return this.text.replace('\n', '<br />')
      }
    },
    methods: {
      closeHandler: function () {
        this.$emit('close')
      },
      inputHandler: function () {
        this.$emit('close')
      }
    },
    watch: {
      value: function (newValue) {
        this.display = newValue
      }
    }
  }
</script>
