<template>
<el-dialog
  title="新增模板"
  :visible.sync="dialogVisible"
  width="800px"
  :before-close="handleClose">

    <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column width="30" align="center">
        <template slot-scope="scope">
            <el-checkbox></el-checkbox>
        </template>
    </el-table-column>
    <el-table-column label="逻辑关系" width="150" align="center">
        <template slot-scope="scope">
            <el-switch
            v-model="tableData[scope.$index].bool"
            style="display: block"
            active-color="#13ce66"
            inactive-color="#409EFF"
            active-text="And"
            inactive-text="Or">
            </el-switch>
        </template>
    </el-table-column>
    <el-table-column prop="name" label="指标" width="120"></el-table-column>
    <el-table-column label="关系" width="200">
        <template slot-scope="scope">
            <el-select v-model="tableData[scope.$index].relation" placeholder="选择关系"  size="small">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </template>
    </el-table-column>
    <el-table-column label="值">
        <template slot-scope="scope">
            <el-input v-model="tableData[scope.$index].value" placeholder="请输入值" size="small"></el-input>
        </template>
    </el-table-column>
  </el-table>
    <el-row :gutter="12" style="padding:10px 0">
    <el-col :span="8" :offset="16">
        <el-input size="small" placeholder="请输入模板名称" style="width:150px;"></el-input>
        <el-button type="primary" size="small">保存</el-button>
    </el-col>
    </el-row>
<br><br><br><br>
 <el-table :data="tableData2" stripe style="width: 100%">
    <el-table-column width="80" align="center">
        <template slot-scope="scope">
            <el-checkbox>{{scope.row.id}}</el-checkbox> 
        </template>
    </el-table-column>
    <el-table-column prop="name" label="模板名称" width="150" align="center"></el-table-column>
    <el-table-column prop="date" label="生成时间" width="100" align="center"></el-table-column>
    <el-table-column prop="content" label="识别标准"></el-table-column>
    <el-table-column prop="percent" label="使用率" width="80" align="center"></el-table-column>
    <el-table-column prop="percent" label="操作" width="180" fixed="right" align="center">
        <template slot-scope="scope">
            <el-button type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">测试</el-button>
            <el-button type="text" size="small">评分</el-button>
        </template>
    </el-table-column>
  </el-table>
    <div style="text-align:right">
          <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
    </div>

  <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose()" size="small">取 消</el-button>
    <el-button type="primary" @click="handleClose()" size="small">确 定</el-button>
  </span>
</el-dialog>
</template>

<script>
    export default {
        props: {
            visible: { type: Boolean, default: true }
        },
        data() {
            return {
                dialogVisible: true,
                tableData: [
                    { id:1, name: '买入成交', bool: false, relation: '', value: '' },
                    { id:2, name: '卖出成交', bool: false, relation: '', value: '' },
                    { id:3, name: '多头持仓', bool: false, relation: '', value: '' },
                    { id:4, name: '空头持仓', bool: false, relation: '', value: '' },
                    { id:5, name: '盈亏', bool: false, relation: '', value: '' },
                    { id:6, name: '净买量', bool: false, relation: '', value: '' },
                    { id:7, name: '净持仓量', bool: false, relation: '', value: '' }
                ],
                options: [
                    { label: '大于', value: '>' },
                    { label: '大于等于', value: '>=' },
                    { label: '等于', value: '=' },
                    { label: '小于等于', value: '<=' },
                    { label: '小于', value: '<' }
                ],
                tableData2: [
                    { id: '001', name: '模板1', date: '2018-10-1', content: '盈亏>20% and 买入成交 > 90%', percent: '11%' },
                    { id: '002', name: '模板2', date: '2018-10-1', content: '盈亏>20% and 买入成交 > 90%', percent: '11%' },
                    { id: '003', name: '模板3', date: '2018-10-1', content: '盈亏>20% and 买入成交 > 90%', percent: '11%' },
                    { id: '004', name: '模板4', date: '2018-10-1', content: '盈亏>20% and 买入成交 > 90%', percent: '11%' },
                    { id: '005', name: '模板5', date: '2018-10-1', content: '盈亏>20% and 买入成交 > 90%', percent: '11%' }
                ]
            }
        },
        methods: {
            handleClose() {
                this.dialogVisible = false;
                this.$emit('close', false);
            }
        },
        watch:{
            visible() {
                this.dialogVisible = this.visible;
            }
        }
    }
</script>

<style lang="less" scoped>
    h3 {
        font-size: 14px;
        border-bottom: 1px solid #ddd;
        padding: 5px 0px;
    }
</style>