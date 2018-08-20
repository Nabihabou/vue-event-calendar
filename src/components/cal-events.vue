<template>
  <div class="events-wrapper">
    <div class="events-header">
      <div>
        <h2 class="events-header-title">Eventos</h2>
        <!-- <p class="events-header-date">15/07</p> -->
      </div>
      <div>
        <button @click="goTo()" type="button" class="events-header-button">Criar evento</button>
      </div>
    </div>
    <!-- <h2 class="date">
      {{dayEventsTitle}}
    </h2> -->
    <div class="cal-events">
      <slot>
        <div v-for="(event, index) in events" class="event-item">
          <cal-event-item :event="event" :index="index" :locale="locale"></cal-event-item>
        </div>
        <div style="height: 100px; visibility: hidden;">.</div>
      </slot>
    </div>
  </div>
</template>

<script>
import i18n from '../i18n.js'
import { dateTimeFormatter } from '../tools.js'
import calEventItem from './cal-event-item.vue'

export default {
  name: 'cal-events',
  data () {
    return {
      i18n
    }
  },
  components: {
    'cal-event-item': calEventItem
  },
  props: {
    title: String,
    dayEvents: {
      type: Object,
      required: true
    },
    locale: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    dayEventsTitle () {
      if (this.title) return this.title
      if (this.dayEvents.date !== 'all') {
        let tempDate
        if (this.dayEvents.events.length !== 0) {
          tempDate = Date.parse(new Date(this.dayEvents.events[0].date))
          return dateTimeFormatter(tempDate, i18n[this.locale].fullFormat)
        } else {
          tempDate = dateTimeFormatter(Date.parse(new Date(this.dayEvents.date)), i18n[this.locale].fullFormat)
          return `${tempDate} ${i18n[this.locale].notHaveEvents}`
        }
      } else {
        return i18n[this.locale].dayEventsTitle
      }
    },
    events () {
      return this.dayEvents.events
    },
    bgColor () {
      return {backgroundColor: this.color}
    }
  },
  methods: {
    dateTimeFormatter,
    goTo() {
      // this.$emit('go-to', '/')
      this.$events.fire('go-to')
    }
  }
}
</script>