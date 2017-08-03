<template>
  <div id="app">

    <div class="">
      <span v-if="!masterLoad">Loading....</span>
      <span v-else>Done</span>
    </div>

    <div class="">
      <ul>
        <li v-if="masterLoad" v-for="work in filterWorks">
          {{work.id}}
        </li>
      </ul>
    </div>

    <div class="" v-if="masterLoad">
      <ul>
        <li v-for="parent in menuNav">
          <button type="button" name="button" @click="setView(parent.id)">{{parent.id}}</button>
          <ul v-if="parent.child">
            <li v-for="child in parent.child">
              <button type="button" name="button" @click="setView(child.id)">{{child.id}}</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      data: ''
    };
  },
  computed: {
    menuNav() {
      return this.$store.state.navMenu;
    },
    workData() {
      return this.$store.state.workData;
    },
    viewState() {
      return this.$store.state.viewState;
    },
    filterWorks() {
      return this.workData.filter(item => {
        return item.mediums.includes(this.viewState);
      });
    },
    masterLoad() {
      if (
        this.$store.state.workReady === true &&
        this.$store.state.navReady === true
      ) {
        return true;
      }
      return false;
    }
  },
  methods: {
    setView(id) {
      this.$store.commit('SET_VIEW', id);
    }
  },
  beforeCreate() {
    this.$store.dispatch('LOAD_MENU');
    this.$store.dispatch('LOAD_WORKS');
  }
};
</script>

<style lang="scss">
.plyr__video-embed {
	border: 1px solid blue;
}
.video-play-container {
    display: block;
    margin: 0 auto;
    width: 100%;
}
</style>
