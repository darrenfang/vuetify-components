<!--
  - MIT License
  -
  - Copyright (c) 2018 Darren Fang
  -
  - Permission is hereby granted, free of charge, to any person obtaining a copy
  - of this software and associated documentation files (the "Software"), to deal
  - in the Software without restriction, including without limitation the rights
  - to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  - copies of the Software, and to permit persons to whom the Software is
  - furnished to do so, subject to the following conditions:
  -
  - The above copyright notice and this permission notice shall be included in all
  - copies or substantial portions of the Software.
  -
  - THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  - IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  - FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  - AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  - LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  - OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  - SOFTWARE.
  -
  -->

<template>
    <div>
        <v-textarea
                :value="displayText"
                :label="label"
                :hint="hint"
                :persistent-hint="persistentHint"
                :loading="loading"
                :counter="counter"
                :rows="rows"
                readonly
                disabled
                auto-grow
                class="v-static-textarea"
        >
            <template v-slot:progress>
                <v-progress-linear
                        :indeterminate="true"
                        :color="progressColor"
                        :height="progressHeight"
                >
                </v-progress-linear>
            </template>
        </v-textarea>
    </div>
</template>

<script>
  export default {
    name: 'v-static-textarea',
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
      rows: {
        type: [Number, String]
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
