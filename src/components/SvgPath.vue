<template>
	<div class="image svg--mask" :style="{ 'clip-path': 'url(#' + svgId + ')' }">
			<svg height="0" width="0">
		    <defs>
					<clipPath :id="svgId" clipPathUnits="objectBoundingBox">
				    <path :d="nuPath" :id="svgId"></path>
					</clipPath>
		    </defs>
			</svg>
			<!-- <div class="mask" :style="{ 'clip-path': 'url(#' + svgId + ')' }"> -->

				<!-- <img src="" alt=""> -->
				<div class="bg--img"></div>

			<!-- </div> -->
							<slot></slot>

	</div>
</template>

<script>
export default {
  name: 'svg-path',
  props: {
    svgPath: undefined,
    svgWidth: undefined,
    svgHeight: undefined,
    svgId: undefined
  },
  data() {
    return {
      nuPath: ''
    };
  },
  mounted() {
    this.nuPath = this.makeResponsive(
      this.svgPath,
      this.svgWidth,
      this.svgHeight
    );
  },
  methods: {
    makeResponsive(svgPath, svgWidth, svgHeight) {
      let count = -1;
      function replacer(match) {
        count++;
        if (count % 2) {
          return match / svgHeight;
        } else {
          return match / svgWidth;
        }
      }
      return svgPath.replace(/(\d+(\.\d+)?)/g, replacer);
    }
  }
};
</script>

<style lang="scss" scoped>


.svg--mask { border: 1px solid red; 	position: relative; height: auto;
}
// .mask {
// 	position: relative;
// 	height: 400px;
// 	width: 100%;
// }

.bg--img {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-image: url('http://lorempixel.com/1200/600/cats/');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	z-index: -1;
}

</style>
