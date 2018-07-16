<template>
    <v-app dark>
        <v-container grid-list-md>
            <v-layout row justify-center>
                <v-flex xs4>
                    <v-btn @click="showMessage" color="success">Show Message</v-btn>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs4>
                    <v-btn @click="showConfirmBox" color="success">Show Confirm Box</v-btn>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs6>
                    <v-form>
                        <v-static-text-field
                                :loading="loading"
                                label="static text field"
                                value="value"
                                hint="hint"
                                :counter="20"
                                :persistentHint="true">
                        </v-static-text-field>
                    </v-form>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs6>
                    <v-form>
                        <v-switch-field
                                label="switch field"
                                :loading="loading"
                                value="value"
                                :checked="true">
                        </v-switch-field>
                    </v-form>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs6>
                    <v-form>
                        <v-switch-field
                                label="readonly switch field"
                                :loading="loading"
                                value="value"
                                :readonly="true"
                                :checked="true">
                        </v-switch-field>
                    </v-form>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs6>
                    <v-form>
                        <v-switch-field
                                label="readonly switch field"
                                :loading="loading"
                                value="value"
                                :readonly="true"
                                :checked="false">
                        </v-switch-field>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>
        <v-message
                v-model="message"
                text="Show Message!"
                :timeout="5000"
                color="success"
                @close="closeHandler">
        </v-message>
        <v-confirm-box
                v-model="confirmBox"
                title="Confirm Box Title"
                text="Confirm Box Text"
                :width="500"
                :cancel="cancelHandler"
                :ok="okHandler">
        </v-confirm-box>
    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        message: false,
        confirmBox: false,
        loading: true
      }
    },
    created () {
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
    methods: {
      showMessage () {
        this.message = true
      },
      showConfirmBox () {
        this.confirmBox = true
      },
      closeHandler () {
        // Handle message box close event...
      },
      cancelHandler () {
        // Handle confirm box cancel event...
      },
      okHandler () {
        // Handle confirm box ok event...
      }
    }
  }
</script>
