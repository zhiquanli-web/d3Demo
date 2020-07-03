<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>基础图形</span>
            </div>
            <div>
                <div id="rectbox"></div>
            </div>
        </el-card>
        
    </div>
</template>

<script>
import { removeToken } from '../../utils/auth'
export default {
  mounted() {
    // 添加一个 svg 标签
    let svg = d3.select("#rectbox")
                .append('svg')
                .attr('width', 1000)
                .attr('height', 800)

    var container = svg.append('g')
    // 矩形
    this.drawRegularPolygon(container, {
        type: 'rect',
        x: 50,
        y: 50,
        width: 100,
        height: 50,
        fill: '#fff',
        stroke: '#0f0',
        strokeWidth: 2,
        transformRotate: 0
    })
    // 矩形文本
    this.createrText(container, {
        x: 85,
        y: 120,
        text: '矩形',
        fontFamily: 'simsun',
        fontSize: 12,
        fill: '#f60',
        fontWeight: 400,
    })
    // 圆形
    this.drawRegularPolygon(container, {
        type: 'circle',
        r: 25,
        cx: 200,
        cy: 70,
        fill: '#fff',
        stroke: '#0f0',
        strokeWidth: 2 
    })
    // 圆形文本
    this.createrText(container, {
        x: 190,
        y: 120,
        text: '圆形',
        fontFamily: 'simsun',
        fontSize: 12,
        fill: '#f60',
        fontWeight: 400,
    })
    // 正三角形
    this.drawRegularPolygon(container, {
        type: 'trilateral',
        r: 30,
        x: 280,
        y: 80,
        fill: '#fff',
        stroke: '#0f0',
        strokeWidth: 2,
        transformRotate: 0
    })
    // 正三角形文本
    this.createrText(container, {
        x: 255,
        y: 120,
        text: '正三角形',
        fontFamily: 'simsun',
        fontSize: 12,
        fill: '#f60',
        fontWeight: 400,
    })
    // 正五边形
    this.drawRegularPolygon(container, {
        type: 'pentagon',
        r: 26,
        x: 350,
        y: 75,
        fill: '#fff',
        stroke: '#0f0',
        strokeWidth: 2,
        transformRotate: 0
    })
    // 正五边形文本
    this.createrText(container, {
        x: 325,
        y: 120,
        text: '正五边形',
        fontFamily: 'simsun',
        fontSize: 12,
        fill: '#f60',
        fontWeight: 400,
    })
    // 正六边形
    this.drawRegularPolygon(container, {
        type: 'hexagon',
        r: 26,
        x: 420,
        y: 75,
        fill: '#fff',
        stroke: '#0f0',
        strokeWidth: 2,
        transformRotate: 0
    })
    // 正六边形文本
    this.createrText(container, {
        x: 396,
        y: 120,
        text: '正六边形',
        fontFamily: 'simsun',
        fontSize: 12,
        fill: '#f60',
        fontWeight: 400,
    })
    
     /**
     * 在图形内部则填充颜色
     * fill-rule: nonzero | evenodd   
     *    nonzero: 按该规则，要判断一个点是否在图形内，从该点作任意方向的一条射线，然后检测射线与图形路径的交点情况。从0开始计数，路径从左向右穿过射线则计数加1，从右向左穿过射线则计数减1。得出计数结果后，如果结果是0，则认为点在图形外部，否则认为在内部。
     *    evenodd: 按该规则，要判断一个点是否在图形内，从该点作任意方向的一条射线，然后检测射线与图形路径的交点的数量。如果结果是奇数则认为点在内部，是偶数则认为点在外部
     * 
     * 这里的左右是根据个人所画图形线段的起始位置来区分的
     */
    // 五角星
    this.drawRegularPolygon(container, {
        type: 'pentagram',
        r: 30,
        x: 490,
        y: 75,
        fill: '#fff',
        stroke: '#0f0',
        strokeWidth: 2,
        transformRotate: 0
    })
    // 五角星文本
    this.createrText(container, {
        x: 470,
        y: 120,
        text: '五角星',
        fontFamily: 'simsun',
        fontSize: 12,
        fill: '#f60',
        fontWeight: 400,
    })
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
       *  transformRotate: 旋转角度
       *  stroke: 边线
       *  strokeWidth: 边线宽度
       */
    //   正圆形、三角形、矩形、正五边形、正六边形、image   (角度 --> 弧度    弧度 = 角度 * PI / 180)
    drawRegularPolygon(container, palygonObj) {
        var type = palygonObj.type,
            width = palygonObj.width,
            height = palygonObj.height,
            fill = palygonObj.fill,
            stroke = palygonObj.stroke,
            strokeWidth = palygonObj.strokeWidth,
            x = palygonObj.x,
            y = palygonObj.y,
            src = palygonObj.src,
            r = palygonObj.r,
            cx = palygonObj.cx,
            cy = palygonObj.cy,
            transformRotate = palygonObj.transformRotate;
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
                var x1 = x + Math.sin(60 * Math.PI / 180) * r,
                    x2 = x - Math.sin(60 * Math.PI / 180) * r,
                    y1 = y + Math.cos(60 * Math.PI / 180) * r,
                    y2 = y + Math.cos(60 * Math.PI / 180) * r;
                return container.append('polygon')
                            .attr('points', `${x},${y - r} ${x1},${y1} ${x2},${y2}`)
                            .attr('fill', fill)
                            .attr('stroke', stroke)
                            .attr('stroke-width', strokeWidth)
                            .attr('transform', `rotate(${transformRotate})`)
            case 'rect':
                return container.append(type)
                    .attr('x', x) 
                    .attr('y', y)
                    .attr('width', width) 
                    .attr('height', height)
                    .attr('fill', fill) 
                    .attr('stroke', stroke) 
                    .attr('stroke-width', strokeWidth) 
                    .attr('transform', `rotate(${transformRotate})`)
            case 'pentagon':
                var x1 = x + Math.cos(18 * Math.PI / 180) * r,
                    x2 = x + Math.sin(36 * Math.PI / 180) * r,
                    x3 = x - Math.sin(36 * Math.PI / 180) * r,
                    x4 = x - Math.cos(18 * Math.PI / 180) * r,
                    y1 = y - Math.sin(18 * Math.PI / 180) * r,
                    y2 = y + Math.cos(36 * Math.PI / 180) * r,
                    y3 = y + Math.cos(36 * Math.PI / 180) * r,
                    y4 = y - Math.sin(18 * Math.PI / 180) * r;
                return container.append('polygon')
                            .attr('points', `${x},${y - r} ${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`)
                            .attr('fill', fill)
                            .attr('stroke', stroke)
                            .attr('stroke-width', strokeWidth)
                            .attr('transform', `rotate(${transformRotate})`)
            case 'hexagon':
                var x0 = x - Math.cos(60 * Math.PI / 180) * r,
                    x1 = x + Math.cos(60 * Math.PI / 180) * r,
                    x2 = x + Math.sin(90 * Math.PI / 180) * r,
                    x3 = x + Math.cos(60 * Math.PI / 180) * r,
                    x4 = x - Math.cos(60 * Math.PI / 180) * r,
                    x5 = x - Math.sin(90 * Math.PI / 180) * r,
                    y0 = y - Math.sin(60 * Math.PI / 180) * r,
                    y1 = y - Math.sin(60 * Math.PI / 180) * r,
                    y2 = y - Math.cos(90 * Math.PI / 180) * r,
                    y3 = y + Math.sin(60 * Math.PI / 180) * r,
                    y4 = y + Math.sin(60 * Math.PI / 180) * r,
                    y5 = y - Math.cos(90 * Math.PI / 180) * r;
                return container.append('polygon')
                            .attr('points', `${x0},${y0} ${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5}`)
                            .attr('fill', fill)
                            .attr('stroke', stroke)
                            .attr('stroke-width', strokeWidth)
            case 'pentagram':
                var x1 = x + Math.cos(18 * Math.PI / 180) * r,
                    x2 = x + Math.sin(36 * Math.PI / 180) * r,
                    x3 = x - Math.sin(36 * Math.PI / 180) * r,
                    x4 = x - Math.cos(18 * Math.PI / 180) * r,
                    y1 = y - Math.sin(18 * Math.PI / 180) * r,
                    y2 = y + Math.cos(36 * Math.PI / 180) * r,
                    y3 = y + Math.cos(36 * Math.PI / 180) * r,
                    y4 = y - Math.sin(18 * Math.PI / 180) * r;
                return container.append('polygon')
                            .attr('points', `${x},${y - r} ${x2},${y2} ${x4},${y4} ${x1},${y1} ${x3},${y3}`)
                            .attr('fill', fill)
                            .attr('stroke', stroke)
                            .attr('stroke-width', strokeWidth)
                            .attr('transform', `rotate(${transformRotate})`)
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
        var text = textObj.text,
            fontFamily = textObj.fontFamily,
            fontSize = textObj.fontSize,
            fontWeight = textObj.fontWeight,
            x = textObj.x,
            y = textObj.y,
            fill = textObj.fill,
            spanx = textObj.spanx;

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