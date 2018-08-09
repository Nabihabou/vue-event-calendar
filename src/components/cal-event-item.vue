<template>
  <div class="wrapper">
    <div style="flex: 4;">
      <h3 class="title">{{event.title}}</h3>
      <p class="project">{{event.projectName}}s</p>
      <p class="place">{{event.place}}</p>    
    </div>
    <!-- <p class="desc">{{event.desc}}</p> -->
    <!-- <p class="time">{{dateTimeFormatter(Date.parse(new Date(event.date)),i18n[locale].fullFormat)}}</p> -->
    <div class="test">
      <div class="icons">
        <!-- <img src="../../assets/img/edit.svg" id="edit" /> -->
        <img src="../../assets/img/trash.svg" id="trash" @click="sendInfoToDelete()" />
      </div>
      <!-- <button type="button" @click="sendInfoToDelete()">DELETE</button> -->
      <div class="time-wrapper">
        <img src="../../assets/img/clock.svg" id="clock"/>
        <h2 class="time">{{event.time}}</h2>
      </div>
    </div>
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

<style lang="less" scoped>
.test {
  flex: 1;
  justify-content: space-between;
  display: flex;
  align-items: flex-end;
  text-align: center;
  flex-direction: column;
}

.icons img#edit {
  margin-right: 8px;
}

.icons img {
  cursor: pointer;
}

.time-wrapper {
  display: flex;
}
</style>
