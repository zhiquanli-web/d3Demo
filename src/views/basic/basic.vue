<template>
    <div>
        <h4>基础图形</h4>
        <div id="rectbox"></div>
    </div>
</template>

<script>
export default {
  mounted() {
      let width = 100,
          height = 50,
          boxWidth = 1000,
          boxHeight = 500,
          color = '#f60',
          strokColor = '#0f0'
      // 添加一个 svg 标签
      let svg = d3.select("#rectbox")
                  .append('svg')
                  .attr('width', boxWidth)
                  .attr('height', boxHeight)
      // 创建一个矩形
      svg.append('rect') 
          .attr('x', 50) // 左上定点距离x轴距离
          .attr('y', 50) // 左上定点距离y轴距离
          .attr('width', width) // 矩形的宽度
          .attr('height', height) // 矩形高度
          .attr('fill', color) // 填充颜色
          .attr('stroke', strokColor) // 边框颜色
          .attr('size', '5px') // 边框大小
  }
}
</script>

<style lang="scss" scoped>

</style>