<template>
    <div class="positionGrade">
        <h1 class="h1">持仓等级</h1>
        <div class="echars">
          <!-- <dir>
                <span>ertertyr</span>
                <p>
                  <el-button type="primary" @click="detailClick" size="small" style="float: right;margin: 2px 20px 2px ">{{detailCon}}</el-button>
          
                </p>
              </dir> -->
          <div class="echarsBox">
              <!--散点图-->
              <div class="graph" id="splashes"></div>
              <!--柱状图-->
              
              <div class="a_selece graph">
                <h1 style="float: left;margin: 2px 20px 0px " >账户组浏览及合并</h1>
                <el-button type="primary" @click="detailClick" size="small" style="float: right;margin: 2px 20px 0px ">{{detailCon}}</el-button>
                <!-- <el-select style="width: 30%"
                 v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select> -->
                <div style="width:100%; height:400px" id="barChart"></div>
                <!-- <div v-show="isShowDetail">
                  erkwekwqe
                </div> -->
              </div>
              
          </div>
            <div class="echarsBox">
                <!--K 线图-->
                <div class="graph" id="candlestick"></div>
                <!--雷达图-->
                <div class="graph" id="radar"></div>
            </div>
        </div>
    </div>
</template>
<script>
// import echartsAFS from 'echarts';
import splashesMinIn from "./echarsData/splashes"; // 散点图
import barChartMinIn from "./echarsData/barChartData"; // 柱状图
import candlestickMinIn from "./echarsData/candlestickData"; // K 线图
import radarMinIn from "./echarsData/radarData"; // 雷达图
export default {
  name: "positionGrade",
  props: {},
  components: {},
  mixins: [splashesMinIn, barChartMinIn, candlestickMinIn, radarMinIn],
  data() {
    return {
      options: [
        {
          value: "A",
          label: "账户1"
        },
        {
          value: "B",
          label: "账户2"
        },
        {
          value: "C",
          label: "账户3"
        }
      ],
      value: "",
      echartsData: [120, 200, 150, 80, 70, 110, 130],
      echartsNum: [220, 230, 150, 80, 70, 110, 130],
      detailCon: "明细",
      isShowDetail: true
    };
  },
  // 计算属性
  computed: {},
  watch: {},
  methods: {
    // detailClick() {},
    detailClick() {
      console.log(3333);
      this.isShowDetail = !this.isShowDetail;

      if (this.isShowDetail) {
        this.detailCon = "显示柱状图";
      } else {
        this.detailCon = "明细";
      }
    }
  },
  mounted() {
    this.splashesDete(); // 散点图
    this.barChartData(); // 柱状图
    this.candlestickData(); // K 线图
    this.radarData(); // 雷达图
  }
};
</script>

<style lang="less" scoped>
.positionGrade {
  border: 1px solid #dcd5d3;
  width: 100%;
  margin-top: 35px;
  // }
  .h1 {
    margin: 0;
    padding: 20px 0 0 20px;
  }
  .echars {
    width: 100%;
    .echarsBox {
      display: flex;
      .graph {
        width: calc(100% / 2);
        height: 450px;
        border: 1px solid #e0dcdc;
        margin: 20px;

        // color: #72ACD1
      }
    }
  }
}
</style>
