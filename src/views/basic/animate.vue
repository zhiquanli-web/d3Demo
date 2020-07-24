<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基础动画</span>
      </div>
      <div>
        <div id="basicbox" />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    // 添加一个 svg 标签
    const svg = d3.select('#basicbox')
      .append('svg')
      .attr('width', 1000)
      .attr('height', 600)

    var container = svg.append('g')
    // 矩形
    var needle = container.append('circle')
      .attr('r', 30)
      .attr('cy', 100)
      .attr('cx', 100)
      .attr('fill', '#0f0')
      .attr('stroke', '#000')
      .attr('stroke-width', 1)

    var run = () => {
      needle.transition()
        .duration(2000) // 动画时长
        .attrTween('fill', () => { // 在 red 和 blue 之间进行插值
          return d3.interpolateRgb('red', 'blue')
        })
      // .attr('fill', 'blue')
        .ease(d3.easeLinear)
        .on('end', run)
    }
    run()
    /**
             * linear：普通的线性变化
             * circle：慢慢地到达变换的最终状态
             * elastic：带有弹跳的到达最终状态
             * bounce：在最终状态处弹跳几次
             */
    /* function turnNeedle(){
                needle
                .transition()
                .duration(2000)
                .attrTween("transform", tween);
                function tween(d, i, a) {
                    return d3.interpolateString("rotate(0, 150, 130)", "rotate(360, 150, 130)");
                }
            }
            setInterval(() => {
                turnNeedle()
            }, 2000) */
    // 动画
    // rectDom.on('click', function() {
    //     rectDom.transition()
    //         .attr('width', 30)
    //         .delay(2000)
    //         .duration(3000)
    //         .ease('blunce') // 过度样式  弹跳
    // })
  }
}
</script>

<style lang="scss" scoped>

</style>
