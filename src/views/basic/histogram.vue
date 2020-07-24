<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>直方图</span>
    </div>
    <div>
      <div id="basicbox" />
    </div>
  </el-card>
</template>

<script>
export default {
  mounted() {
    var width = 1000
    var height = 800
    var margin = {
      top: 60,
      right: 50,
      bottom: 60,
      left: 100
    }
    var svg = d3.select('#basicbox')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
    var data = [
      { name: 'Li XiaoJuan', value: 20 },
      { name: 'Cai HuiPeng', value: 25 },
      { name: 'Wu JingChong', value: 50 },
      { name: 'Bai Shi', value: 80 }
    ]

    var innerWidth = width - margin.left - margin.right
    var innerHeight = height - margin.top - margin.bottom

    var xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([0, innerWidth])

    var yScale = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([0, innerHeight])

    var g = svg.append('g')
      .attr('id', 'maingroup')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
    console.log('xScale', g)
    var yAxis = d3.axisLeft(yAxis)

    g.append('g').call(yAxis)
  }
}
</script>

<style lang="scss" scoped>

</style>
