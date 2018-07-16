<template>
    <div :class="{
            'switch-field': true,
            'switch-field-readonly': readonly
        }">
        <label :class="{
            'switch-label': true,
            'switch-label-active': !loading
        }">
            {{label}}
        </label>
        <v-switch v-if="!loading" class="switch-input"
                  :label="text" :input-value="value"
                  :disabled="disabled || readonly"
                  @change="changeHandler">
        </v-switch>
        <div>
            <slot name="progress" v-if="loading">
                <v-progress-circular indeterminate :color="progressColor" :width="progressWidth">
                </v-progress-circular>
            </slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'v-switch-field',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      label: {
        type: String
      },
      text: {
        type: String
      },
      loading: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      value: {
        type: Boolean
      },
      readonly: {
        type: Boolean,
        default: false
      },
      progressColor: {
        type: String,
        default: 'primary'
      },
      progressWidth: {
        type: Number,
        default: 3
      }
    },
    methods: {
      changeHandler: function () {
        if (!this.readonly) {
          this.$emit('change', !this.value)
        }
      }
    }
  }
</script>
