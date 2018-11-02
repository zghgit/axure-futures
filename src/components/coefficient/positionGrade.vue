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
              <div class="a_selece graph">
                    <h1>账户组情况概览</h1>
                    <el-button type="primary" @click="splashesClick" size="small" class="button">{{detailCon3}}</el-button>
                    <div v-show="isShowsplashes" id="splashes" style="width:100%; height:450px"></div>
                    <div v-show="!isShowsplashes" class="barChartImg">
                    <img src="../../assets/img/3.jpg" alt="">
                    </div>
              </div>
              <!--柱状图-->
              
              <div class="a_selece graph">
                <h1>持仓情况</h1>
                <el-button type="primary" @click="barChartClick" size="small" class="button">{{detailCon1}}</el-button>
                <!-- <el-select style="width: 30%"
                 v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select> -->
                <div v-show="isShowbarChart" style="width:100%; height:400px" id="barChart"></div>
                <div v-show="!isShowbarChart" class="barChartImg">
                  <img src="../../assets/img/1.jpg" alt="">
                </div>
              </div>
              
          </div>
            <div class="echarsBox">
                <!--K 线图-->
                <div class="graph" id="candlestick"></div>
                <!--雷达图-->
                <div class="a_selece graph">
                    <h1>分时图</h1>
                    <el-button type="primary" @click="radarClick" size="small" class="button">{{detailCon2}}</el-button>
                    <div v-show="isShowradar" id="radar" style="width:100%; height:450px"></div>
                    <div v-show="!isShowradar" class="barChartImg">
                    <img src="../../assets/img/2.jpg" alt="">
                    </div>
                </div>
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
      detailCon1: "明细11111",
      detailCon2: "明细",
      detailCon3: "明细",
      isShowbarChart: true,
      isShowradar: true,
      isShowsplashes: true
    };
  },

  // 计算属性
  computed: {},
  watch: {},
  methods: {
    // detailClick() {},
    barChartClick() {
      this.isShowbarChart = !this.isShowbarChart;
      this.detailCon1 = this.isShowbarChart ? "明细" : "可视化";
    },
    radarClick() {
      this.isShowradar = !this.isShowradar;
      this.detailCon2 = this.isShowradar ? "明细" : "可视化";
    },
    splashesClick() {
      this.isShowsplashes = !this.isShowsplashes;
      this.detailCon3 = this.isShowsplashes ? "明细" : "可视化";
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
}
.h1 {
  margin: 0;
  padding: 20px 0 0 20px;
}
.echars {
  width: 100%;
  .echarsBox {
    display: flex;
    .graph {
      width: 50%;
      height: 450px;
      border: 1px solid #e0dcdc;
      margin: 20px;
    }
  }
}

.a_selece {
  position: relative;

  h1 {
    position: absolute;
    left: 10px;
    top: 10px;
    margin: 0;
    z-index: 10;
  }
}

.button {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
}

.barChartImg {
  padding: 80px 20px 0 20px;
  img {
    width: 100%;
  }
}
</style>
