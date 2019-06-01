<template>
    <div>
        <v-text-field
                :value="displayText"
                :label="label"
                :counter="counter"
                :hint="hint"
                :persistent-hint="persistentHint"
                :loading="loading"
                readonly
                disabled
                class="v-static-text-field"
        >
            <template v-slot:progress>
                <v-progress-linear
                        indeterminate
                        :color="progressColor"
                        :height="progressHeight"
                >
                </v-progress-linear>
            </template>
        </v-text-field>
    </div>
</template>

<script>
  export default {
    name: 'v-static-text-field',
    props: {
      label: {
        type: String
      },
      value: {
        required: true
      },
      hint: {
        type: String
      },
      counter: {
        type: Boolean
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
      progressHeight: {
        type: Number,
        default: 3
      }
    },
    computed: {
      displayText: function () {
        return this.loading ? '' : this.value
      }
    }
  }
</script>
