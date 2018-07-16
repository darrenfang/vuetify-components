<template>
    <v-text-field
            :value="value"
            :label="label"
            :counter="counter"
            :hint="hint"
            :persistent-hint="persistentHint"
            :loading="loading"
            disabled
            class="v-static-text-field">
        <slot name="progress" slot="progress">
            <v-progress-linear :indeterminate="true" :color="progressColor" :width="progressWidth">
            </v-progress-linear>
        </slot>
    </v-text-field>
</template>

<script>
  export default {
    name: 'v-static-text-field',
    props: {
      label: {
        type: String
      },
      value: {
        type: String
      },
      hint: {
        type: String
      },
      counter: {
        type: Number
      },
      persistentHint: {
        type: Boolean
      },
      loading: {
        type: Boolean
      },
      progressColor: {
        type: String,
        default: 'primary'
      },
      progressWidth: {
        type: Number,
        default: 3
      }
    }
  }
</script>
