<template>
  <div></div>
</template>

<script >
export default {
  data () {
    return {
      name: 'Batyr'
    }
  },
  methods: {
    clear () {
      this.name = ''
    },
    alertMsg () {
      alert(this.name)
    }
  }
}
</script>
