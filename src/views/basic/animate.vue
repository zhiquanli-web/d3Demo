<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>基础动画</span>
            </div>
            <div>
                <div id="basicbox"></div>
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
            let svg = d3.select("#basicbox")
                        .append('svg')
                        .attr('width', 1000)
                        .attr('height', 600)

            var container = svg.append('g')
            // 矩形
            var rect  = container.append('rect')
                                .attr('x', 100)
                                .attr('y', 100)
                                .attr('width', 200)
                                .attr('height', 100)
                                .attr('fill', '#0f0')
                                .attr('stroke', '#000')
                                .attr('stroke-width', 1)
            rect.transition()
                    .attr('width', 30)
                    .delay(2000)
                    .duration(3000)
                    .ease('blunce') // 过度样式  弹跳
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