<template>
  <div id="app">
		<!-- <div class="video-play-container" style="max-width: 640px; max-height: 338px;">
    	<div class="js--player" data-type="vimeo" data-video-id="225408543"></div>
		</div> -->

    <div class="">
      <ul>
        <li v-if="masterLoad" v-for="work in filterWorks">
          {{work.id}}
        </li>
      </ul>
    </div>


    <input type="text" name="" value="" v-model="id">
    <button type="button" name="button" @click="setView">FILTER</button>

    <div class="">
      <ul>
        <li v-for="parent in menuNav">
          {{parent.id}}
          <ul v-if="parent.child">
            <li v-for="child in parent.child">
              {{child.id}}
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
      id: 10,
      works: []
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
      return this.$store.state.workData.filter(item => {
        return item.mediums.includes(this.$store.state.viewState);
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
    setView() {
      this.$store.commit('SET_VIEW', this.id);
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
