<template>
    <div class="associatedDataTab">
        <el-tabs v-model="activeName">
            <el-tab-pane v-for="active in activeNameList" :label="active.label" :name="active.name" :key="active.name">
                <el-table
            :data="active.tableDataList"
            border
            style="width: 100%;">
            <el-table-column v-for="(item, index) in active.tableColumns"
             :key="item.field"
             :prop="item.field"
             :label="item.title"
             :align="item.align"
             :min-width="item.minWidth">
            </el-table-column>
          </el-table>
            </el-tab-pane>
        </el-tabs>
        <div class="operationBtn">
            <el-button type="success" @click="amendClick" size="small">交易信息</el-button>
            <el-button type="primary" @click="addDiscernIndexClick" size="small">排序</el-button>
            <el-button type="primary" @click="addSceneClick" size="small">合并</el-button>
            <el-button type="primary" @click="addSceneClick" size="small">导出</el-button>
            <el-button type="primary" @click="addSceneClick" size="small">保存结果集</el-button>
        </div>
    </div>
</template>
<script>
    import {
        tableColumns_MTSL02_1,
        tableColumns_MTSL02_2,
        tableColumns_MTSL02_3,
        tableColumns_MTSL02_4,
        tableColumns_MTSL02_5, 
        tableColumns_MTSL02_6
    } from '../coefficient/associatedDataTabData.js';

    export default {
        name: "associatedDataTab",
        props: {},
        components: {},
        mixins: [],
        data() {
            return {
                 // tab默认展示第一个
        activeName: 'first',
        activeNameList: [
          {
          name: 'first',
          label: '账户组概览',
          tableColumns: tableColumns_MTSL02_1,
          tableDataList: [],
          href: '',
        }, {
          label: '账户组客户',
          name: 'second',
          tableColumns: tableColumns_MTSL02_2,
          tableDataList: [],
          href: 'MTSL_00003',
        }, {
          label: '账户组参数',
          name: 'third',
          tableColumns: tableColumns_MTSL02_3,
          tableDataList: [],
          href: 'MTSL_00005',
        }, {
          label: '平均相关系数',
          name: 'fourth',
          tableColumns: tableColumns_MTSL02_4,
          tableDataList: [],
          href: 'MTSL_00010',
        }, {
          label: '系数明细',
          name: 'fifth',
          tableColumns: tableColumns_MTSL02_5,
          tableDataList: [],
          href: '',
        }, {
          label: '系数矩阵',
          name: 'sixth',
          tableColumns: tableColumns_MTSL02_6,
          tableDataList: [],
          href: '',
     }],
                
            };
        },
        methods: {
            amendClick(){},
            addDiscernIndexClick(){},
            addSceneClick(){}
        }
    }
</script>

<style lang="less" scoped>
    .associatedDataTab {
         border: 1px solid #dcd5d3;
         margin-top: 35px;
         padding: 20px 0 0 20px;
         .operationBtn{
            text-align: right;
            padding: 20px;
         }
    }
</style>
