<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基础图形</span>
      </div>
      <div>
        <div id="basicbox" />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    // 添加一个 svg 标签
    const svg = d3.select('#basicbox')
      .append('svg')
      .attr('width', 1000)
      .attr('height', 600)

    var container = svg.append('g')

    // 圆形
    this.drawRegularPolygon(container, {
      type: 'circle',
      r: 35,
      cx: 100,
      cy: 70,
      fill: '#fff',
      stroke: '#0f0',
      strokeWidth: 2
    })
    this.createrText(container, {
      x: 92,
      y: 130,
      text: '圆',
      fontFamily: 'simsun',
      fontSize: 12,
      fill: '#f60',
      fontWeight: 500
    })

    // 正三角形
    this.drawRegularPolygon(container, {
      type: 'trilateral',
      r: 35,
      x: 200,
      y: 80,
      fill: '#fff',
      stroke: '#0f0',
      strokeWidth: 2,
      transformRotate: 0
    })
    this.createrText(container, {
      x: 175,
      y: 130,
      text: '正三角形',
      fontFamily: 'simsun',
      fontSize: 12,
      fill: '#f60',
      fontWeight: 500
    })

    // 矩形
    this.drawRegularPolygon(container, {
      type: 'rect',
      x: 270,
      y: 50,
      width: 80,
      height: 40,
      fill: '#fff',
      stroke: '#0f0',
      strokeWidth: 2,
      transformRotate: 0
    })
    // rectDom.transition()
    //         .attr('width', 30)
    //         .delay(2000)
    //         .duration(3000)
    //         .ease('blunce') // 过度样式  弹跳
    // 动画
    // rectDom.on('click', function() {
    //     rectDom.transition()
    //         .attr('width', 30)
    //         .delay(2000)
    //         .duration(3000)
    //         .ease('blunce') // 过度样式  弹跳
    // })
    this.createrText(container, {
      x: 300,
      y: 130,
      text: '矩形',
      fontFamily: 'simsun',
      fontSize: 12,
      fill: '#f60',
      fontWeight: 500
    })

    // 正五边形
    this.drawRegularPolygon(container, {
      type: 'pentagon',
      r: 35,
      x: 430,
      y: 75,
      fill: '#fff',
      stroke: '#0f0',
      strokeWidth: 2,
      transformRotate: 0
    })
    this.createrText(container, {
      x: 404,
      y: 130,
      text: '正五边形',
      fontFamily: 'simsun',
      fontSize: 12,
      fill: '#f60',
      fontWeight: 400
    })

    // 正六边形
    this.drawRegularPolygon(container, {
      type: 'hexagon',
      r: 35,
      x: 530,
      y: 75,
      fill: '#fff',
      stroke: '#0f0',
      strokeWidth: 2,
      transformRotate: 0
    })
    this.createrText(container, {
      x: 506,
      y: 130,
      text: '正六边形',
      fontFamily: 'simsun',
      fontSize: 12,
      fill: '#f60',
      fontWeight: 400
    })

    // 四边相等的菱形
    this.drawRegularPolygon(container, {
      type: 'lozenge',
      r: 20,
      x: 100,
      y: 200,
      fill: '#fff',
      stroke: '#0f0',
      strokeWidth: 2,
      transformRotate: 0
    })
    this.createrText(container, {
      x: 90,
      y: 260,
      text: '菱形',
      fontFamily: 'simsun',
      fontSize: 12,
      fill: '#f60',
      fontWeight: 500
    })

    // 四角星
    this.drawRegularPolygon(container, {
      type: 'shuriken',
      r: 30,
      x: 190,
      y: 200,
      fill: '#fff',
      stroke: '#0f0',
      strokeWidth: 2,
      transformRotate: 0
    })
    this.createrText(container, {
      x: 175,
      y: 260,
      text: '四角星',
      fontFamily: 'simsun',
      fontSize: 12,
      fill: '#f60',
      fontWeight: 500
    })

    // 五角星
    this.drawRegularPolygon(container, {
      type: 'pentagram',
      r: 30,
      x: 300,
      y: 200,
      fill: '#fff',
      stroke: '#0f0',
      strokeWidth: 2,
      transformRotate: 0
    })
    this.createrText(container, {
      x: 280,
      y: 260,
      text: '五角星',
      fontFamily: 'simsun',
      fontSize: 12,
      fill: '#f60',
      fontWeight: 500
    })

    // 六角星
    this.drawRegularPolygon(container, {
      type: 'hexagram',
      r: 30,
      x: 400,
      y: 200,
      fill: '#fff',
      stroke: '#0f0',
      strokeWidth: 2,
      transformRotate: 30
    })
    this.createrText(container, {
      x: 380,
      y: 260,
      text: '六角星',
      fontFamily: 'simsun',
      fontSize: 12,
      fill: '#f60',
      fontWeight: 500
    })

    // 箭头
    this.drawRegularPolygon(container, {
      type: 'arrow',
      r: 30,
      x: 500,
      y: 200,
      fill: '#fff',
      stroke: '#0f0',
      strokeWidth: 2,
      transformRotate: 0,
      arrowWidth: 10,
      arrowHeight: 20
    })
    this.createrText(container, {
      x: 490,
      y: 260,
      text: '箭头',
      fontFamily: 'simsun',
      fontSize: 12,
      fill: '#f60',
      fontWeight: 500
    })

    /**
     * 在图形内部则填充颜色
     * fill-rule: nonzero | evenodd
     *    nonzero: 按该规则，要判断一个点是否在图形内，从该点作任意方向的一条射线，然后检测射线与图形路径的交点情况。从0开始计数，路径从左向右穿过射线则计数加1，从右向左穿过射线则计数减1。得出计数结果后，如果结果是0，则认为点在图形外部，否则认为在内部。
     *    evenodd: 按该规则，要判断一个点是否在图形内，从该点作任意方向的一条射线，然后检测射线与图形路径的交点的数量。如果结果是奇数则认为点在内部，是偶数则认为点在外部
     *
     * 这里的左右是根据个人所画图形线段的起始位置来区分的
     */
  },
  methods: {
    /**
       *
       * @param {组标签} container
       * @param {节点相关数据} palygonObj
       *  type：节点类型 circle/image/rect
       *  src： 图片的地址(Array)
       *  fill：填充颜色(Array)
       *  width：节点高
       *  height：节点宽
       *  x：节点 x 轴坐标 (正多边形内接圆圆心x轴坐标)
       *  y：节点 y 轴坐标 (正多边形内接圆圆心y轴坐标)
       *  r：圆形节点半径 (正多边形内接圆半径)
       *  cx：圆形节点圆心 x 轴坐标
       *  cy：圆形节点圆心 y 轴坐标
       *  transformRotate: 旋转角度(节点中心旋转)
       *  stroke: 边线
       *  strokeWidth: 边线宽度
       *  arrowWidth：三角形与矩形交点的x轴距离
       *  arrowHeight：矩形顶点到三角形的y轴距离
       */
    //   圆形、三角形、矩形、正五边形、正六边形、灵性、四角星、五角星、六角星、箭头   (角度 --> 弧度    弧度 = 角度 * PI / 180)
    drawRegularPolygon(container, palygonObj) {
      var type = palygonObj.type
      var width = palygonObj.width
      var height = palygonObj.height
      var fill = palygonObj.fill
      var stroke = palygonObj.stroke
      var strokeWidth = palygonObj.strokeWidth
      var x = palygonObj.x
      var y = palygonObj.y
      var src = palygonObj.src
      var r = palygonObj.r
      var cx = palygonObj.cx
      var cy = palygonObj.cy
      var arrowWidth = palygonObj.arrowWidth
      var arrowHeight = palygonObj.arrowHeight
      var transformRotate = palygonObj.transformRotate
      switch (type) {
        case 'circle':
          return container.append(type)
            .attr('r', r)
            .attr('cx', cx)
            .attr('cy', cy)
            .attr('fill', fill)
            .attr('stroke', stroke)
            .attr('stroke-width', strokeWidth)
        case 'trilateral':
          var x1 = x
          var x2 = x + Math.sin(60 * Math.PI / 180) * r
          var x3 = x - Math.sin(60 * Math.PI / 180) * r
          var y1 = y - r
          var y2 = y + Math.cos(60 * Math.PI / 180) * r
          var y3 = y + Math.cos(60 * Math.PI / 180) * r
          return container.append('polygon')
            .attr('points', `${x1},${y1} ${x2},${y2} ${x3},${y3}`)
            .attr('fill', fill)
            .attr('stroke', stroke)
            .attr('stroke-width', strokeWidth)
            .attr('transform', `rotate(${transformRotate}, ${x}, ${y})`)
        case 'rect':
          return container.append(type)
            .attr('x', x)
            .attr('y', y)
            .attr('width', width)
            .attr('height', height)
            .attr('fill', fill)
            .attr('stroke', stroke)
            .attr('stroke-width', strokeWidth)
            .attr('transform', `rotate(${transformRotate}, ${x + x / 2}, ${y + y / 2})`)
        case 'lozenge':
          var x1 = x
          var x2 = x + Math.sin(60 * Math.PI / 180) * r
          var x3 = x
          var x4 = x - Math.sin(60 * Math.PI / 180) * r
          var y1 = y - r
          var y2 = y + Math.cos(60 * Math.PI / 180) * r
          var y3 = y + Math.cos(60 * Math.PI / 180) * r + Math.tan(60 * Math.PI / 180) * Math.sin(60 * Math.PI / 180) * r
          var y4 = y + Math.cos(60 * Math.PI / 180) * r
          return container.append('polygon')
            .attr('points', `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`)
            .attr('fill', fill)
            .attr('stroke', stroke)
            .attr('stroke-width', strokeWidth)
            .attr('transform', `rotate(${transformRotate}, ${x}, ${y})`)
        case 'pentagon':
          var x1 = x
          var x2 = x + Math.cos(18 * Math.PI / 180) * r
          var x3 = x + Math.sin(36 * Math.PI / 180) * r
          var x4 = x - Math.sin(36 * Math.PI / 180) * r
          var x5 = x - Math.cos(18 * Math.PI / 180) * r
          var y1 = y - r
          var y2 = y - Math.sin(18 * Math.PI / 180) * r
          var y3 = y + Math.cos(36 * Math.PI / 180) * r
          var y4 = y + Math.cos(36 * Math.PI / 180) * r
          var y5 = y - Math.sin(18 * Math.PI / 180) * r
          return container.append('polygon')
            .attr('points', `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} `)
            .attr('fill', fill)
            .attr('stroke', stroke)
            .attr('stroke-width', strokeWidth)
            .attr('transform', `rotate(${transformRotate}, ${x}, ${y})`)
        case 'hexagon':
          var x1 = x - Math.cos(60 * Math.PI / 180) * r
          var x2 = x + Math.cos(60 * Math.PI / 180) * r
          var x3 = x + Math.sin(90 * Math.PI / 180) * r
          var x4 = x + Math.cos(60 * Math.PI / 180) * r
          var x5 = x - Math.cos(60 * Math.PI / 180) * r
          var x6 = x - Math.sin(90 * Math.PI / 180) * r
          var y1 = y - Math.sin(60 * Math.PI / 180) * r
          var y2 = y - Math.sin(60 * Math.PI / 180) * r
          var y3 = y - Math.cos(90 * Math.PI / 180) * r
          var y4 = y + Math.sin(60 * Math.PI / 180) * r
          var y5 = y + Math.sin(60 * Math.PI / 180) * r
          var y6 = y - Math.cos(90 * Math.PI / 180) * r
          return container.append('polygon')
            .attr('points', `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} ${x6},${y6}`)
            .attr('fill', fill)
            .attr('stroke', stroke)
            .attr('stroke-width', strokeWidth)
            .attr('transform', `rotate(${transformRotate}, ${x}, ${y})`)
        case 'pentagram':
          var x1 = x + Math.cos(18 * Math.PI / 180) * r
          var x2 = x + Math.sin(36 * Math.PI / 180) * r
          var x3 = x - Math.sin(36 * Math.PI / 180) * r
          var x4 = x - Math.cos(18 * Math.PI / 180) * r
          var y1 = y - Math.sin(18 * Math.PI / 180) * r
          var y2 = y + Math.cos(36 * Math.PI / 180) * r
          var y3 = y + Math.cos(36 * Math.PI / 180) * r
          var y4 = y - Math.sin(18 * Math.PI / 180) * r
          return container.append('polygon')
            .attr('points', `${x},${y - r} ${x2},${y2} ${x4},${y4} ${x1},${y1} ${x3},${y3}`)
            .attr('fill', fill)
            .attr('stroke', stroke)
            .attr('stroke-width', strokeWidth)
            .attr('transform', `rotate(${transformRotate}, ${x}, ${y})`)
        case 'arrow':
          var x1 = x
          var x2 = x + Math.sin(60 * Math.PI / 180) * r
          var x3 = x + arrowWidth
          var x4 = x + arrowWidth
          var x5 = x - arrowWidth
          var x6 = x - arrowWidth
          var x7 = x - Math.sin(60 * Math.PI / 180) * r
          var y1 = y - r
          var y2 = y + Math.cos(60 * Math.PI / 180) * r
          var y3 = y2
          var y4 = y2 + arrowHeight
          var y5 = y2 + arrowHeight
          var y6 = y2
          var y7 = y2
          return container.append('polygon')
            .attr('points', `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} ${x6},${y6} ${x7},${y7}`)
            .attr('fill', fill)
            .attr('stroke', stroke)
            .attr('stroke-width', strokeWidth)
            .attr('transform', `rotate(${transformRotate}, ${x}, ${y})`)
        case 'shuriken':
          return container.append('polygon')
            .attr('points', `${x},${y - r} ${x + r / 4},${y - r / 4} ${x + r},${y} ${x + r / 4},${y + r / 4} ${x},${y + r} ${x - r / 4},${y + r / 4} ${x - r},${y} ${x - r / 4},${y - r / 4}`)
            .attr('fill', fill)
            .attr('stroke', stroke)
            .attr('stroke-width', strokeWidth)
            .attr('transform', `rotate(${transformRotate}, ${x}, ${y})`)
        case 'hexagram':
          var x1 = x - Math.cos(60 * Math.PI / 180) * r
          var x2 = x
          var x3 = x + Math.cos(60 * Math.PI / 180) * r
          var x4 = x + Math.cos(30 * Math.PI / 180) * r / 2
          var x5 = x + Math.sin(90 * Math.PI / 180) * r
          var x6 = x4
          var x7 = x + Math.cos(60 * Math.PI / 180) * r
          var x8 = x
          var x9 = x - Math.cos(60 * Math.PI / 180) * r
          var x10 = x - Math.cos(30 * Math.PI / 180) * r / 2
          var x11 = x - Math.sin(90 * Math.PI / 180) * r
          var x12 = x10
          var y1 = y - Math.sin(60 * Math.PI / 180) * r
          var y2 = y - r / 2
          var y3 = y - Math.sin(60 * Math.PI / 180) * r
          var y4 = y - Math.sin(30 * Math.PI / 180) * r / 2
          var y5 = y - Math.cos(90 * Math.PI / 180) * r
          var y6 = y + Math.sin(30 * Math.PI / 180) * r / 2
          var y7 = y + Math.sin(60 * Math.PI / 180) * r
          var y8 = y + r / 2
          var y9 = y + Math.sin(60 * Math.PI / 180) * r
          var y10 = y6
          var y11 = y - Math.cos(90 * Math.PI / 180) * r
          var y12 = y4
          return container.append('polygon')
            .attr('points', `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} ${x6},${y6} ${x7},${y7} ${x8},${y8} ${x9},${y9} ${x10},${y10} ${x11},${y11} ${x12},${y12}`)
            .attr('fill', fill)
            .attr('stroke', stroke)
            .attr('stroke-width', strokeWidth)
            .attr('transform', `rotate(${transformRotate}, ${x}, ${y})`)
        default:
          break
      }
    },
    /**
       *
       * @param {组标签} container
       * @param {文本数据} textObj
       *  text：文本内容及字体颜色(Array)
       *  fontFamily：字体
       *  fontSize：字体大小
       *  fontWeight：加粗程度
       *  x：文本位置 x 轴坐标
       *  y：文本位置 y 轴坐标
       */
    // 创建文本
    createrText(container, textObj) {
      var text = textObj.text
      var fontFamily = textObj.fontFamily
      var fontSize = textObj.fontSize
      var fontWeight = textObj.fontWeight
      var x = textObj.x
      var y = textObj.y
      var fill = textObj.fill
      var spanx = textObj.spanx

      return container.append('text')
        .text(text)
        .attr('x', x)
        .attr('y', y)
        .style('font-family', fontFamily)
        .style('font-size', fontSize)
        .style('font-weight', fontWeight)
        .attr('fill', fill)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
