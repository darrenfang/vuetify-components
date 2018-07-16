<template>
    <v-layout row justify-center>
        <v-dialog :value="display" persistent :max-width="width">
            <v-card>
                <v-card-title class="headline">{{title}}</v-card-title>
                <v-card-text v-if="text">{{text}}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :color="color(this.danger)" @click.native="show = false"
                           v-on:click="okHandler">
                        {{okText}}
                    </v-btn>
                    <v-btn color="grey lighten-1" flat @click.native="show = false"
                           v-on:click="cancelHandler">
                        {{cancelText}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
  export default {
    name: 'v-confirm-box',
    model: {
      prop: 'display',
      event: 'hide'
    },
    props: {
      display: {
        type: Boolean,
        required: false,
        default: false
      },
      title: {
        type: String,
        required: false,
        default: '确认？'
      },
      text: {
        type: String,
        required: false
      },
      width: {
        type: Number,
        required: false,
        default: 400
      },
      cancelText: {
        type: String,
        required: false,
        default: 'CANCEL'
      },
      okText: {
        type: String,
        required: false,
        default: 'OK'
      },
      cancel: {
        type: Function,
        required: false
      },
      ok: {
        type: Function,
        required: false
      },
      danger: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      cancelHandler: function () {
        this.hide()
        if (this.cancel) {
          this.cancel()
        }
      },
      okHandler: function () {
        this.hide()
        if (this.ok) {
          this.ok()
        }
      },
      hide: function () {
        this.$emit('hide', false)
      },
      color: function (danger) {
        return danger ? 'red darken-1' : 'green darken-1'
      }
    }
  }
</script>
