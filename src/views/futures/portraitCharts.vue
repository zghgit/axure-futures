<template>
    <div class='portrait'>
        <div>
            <word-cloud class="halfWidth chartItem"></word-cloud>
            <radar-chart class="halfWidth chartItem"></radar-chart>
            <bar-chart class="chartItem"></bar-chart>
            <div class="flex">
                <line-chart class="halfWidth chartItem"></line-chart>
                <basic-info-chart class="halfWidth chartItem"></basic-info-chart>
            </div>
            <div class="flex">
                <scatter-point-3D class="halfWidth chartItem"></scatter-point-3D>
                <private-equity-funds class="halfWidth chartItem"></private-equity-funds>
            </div>
            <div class="flex">
                <left-pie-chart class="halfWidth chartItem"></left-pie-chart>
                <right-pie-chart class="halfWidth chartItem"></right-pie-chart>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'portraitCharts',
        components: {
            WordCloud: () => import('../../components/portraitCharts/wordCloud'),
            RadarChart: () => import('../../components/portraitCharts/radarChart'),
            BarChart: () => import('../../components/portraitCharts/bar'),
            LineChart: () => import('../../components/portraitCharts/lineChart'),
            BasicInfoChart: () => import('../../components/portraitCharts/basicInfoChart'),
            ScatterPoint3D: () => import('../../components/portraitCharts/scatterPoint3D'),
            PrivateEquityFunds: () => import('../../components/portraitCharts/privateEquityFunds'),
            LeftPieChart: () => import('../../components/portraitCharts/leftPieChart'),
            RightPieChart: () => import('../../components/portraitCharts/rightPieChart'),
        },
        mixins: [],
        props: {},
        data() {
            return {};
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
        },
        methods: {},
        beforeDestory() {
        }
    };
</script>

<style lang='less' scoped>
    .portrait {
        .halfWidth {
            width: 598px;
            display: inline-block;
        }
        /deep/ .title {
            text-align: center;
            font-size: 18px;
            font-weight: 500;
        }
        /deep/ .border {
            border: 2px solid black;
            width: 100%;
        }
        /deep/ .titleItem {
            display: inline-block;
            margin: 4px 20px;
        }
        .chartItem {
            margin: 4px 0;
        }
        .flex{
            display: flex;
            flex-flow: nowrap;
            justify-content: space-between;
        }
    }
</style>
