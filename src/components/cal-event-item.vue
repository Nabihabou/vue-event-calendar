<template>
  <div class="wrapper">
    <h3 class="title">{{index+1}}. {{event.title}}</h3>
    <p class="time">{{dateTimeFormatter(Date.parse(new Date(event.date)),i18n[locale].fullFormat)}}</p>
    <p class="desc">{{event.desc}}</p>
    <h2 v-if="event.time != null">{{event.time}}</h2>
    <p>{{event.project}}</p>
    <p>{{event.place}}</p>
    <button type="button" @click="sendInfoToDelete()">DELETE</button>
  </div>
</template>
<script>
import i18n from '../i18n.js'
import { dateTimeFormatter } from '../tools.js'
import axios from 'axios'

export default {
  data () {
    return {
      i18n,
    }
  },
  props: {
    event: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    locale: {
      type: String,
      required: true
    }
  },
  methods: {
    dateTimeFormatter,
    sendInfoToDelete() {
      this.$events.fire('delete-event', this.event)
    },
  },
}
</script>