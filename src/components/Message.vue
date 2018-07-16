<template>
    <v-snackbar
            v-model="display"
            :timeout="timeout"
            :color="color"
            :multi-line="mode === 'multi-line'"
            :vertical="mode === 'vertical'">
        <span v-html="displayText"></span>
        <v-btn dark flat @click="closeMessage">{{closeText}}</v-btn>
    </v-snackbar>
</template>

<script>
  export default {
    name: 'v-message',
    model: {
      prop: 'display',
      event: 'close'
    },
    props: {
      display: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        required: true
      },
      timeout: {
        type: Number,
        default: 0
      },
      color: {
        type: String,
        default: 'info'
      },
      vertical: {
        type: String,
        default: 'vertical'
      },
      closeText: {
        type: String,
        default: 'Close'
      }
    },
    computed: {
      displayText () {
        return this.text.replace('\n', '<br />')
      }
    },
    methods: {
      closeMessage: function () {
        this.$emit('close', false)
      }
    }
  }
</script>
