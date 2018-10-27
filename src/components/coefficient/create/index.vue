<template>
<div>
<el-dialog
  title="新增场景"
  :visible.sync="dialogVisible"
  width="800px"
  :before-close="handleClose">
  <el-form :model="form" label-width="100px" inline>
      <h3>场景信息</h3>
      <el-row>
          <el-col :span="12">
            <el-form-item label="场景名称">
                <el-input placeholder="输入场景名称" size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="场景备注">
                <el-input type="textarea" rows="2" placeholder="输入场景备注" size="small"></el-input>
            </el-form-item>
          </el-col>
      </el-row>
      <h3>选择日期</h3>
      <el-row>
          <el-col :span="12">
            <el-form-item label="开始日期">
                <el-date-picker
                v-model="form.date"
                 size="small"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="结束日期">
                <el-date-picker
                v-model="form.date"
                 size="small"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
          </el-col>
      </el-row>
      <h3>选择品种或合约</h3>
      <el-row>
          <el-col :span="12">
            <el-form-item label="品种" label-width="60px">
                  <el-radio v-model="radio" label="1">&nbsp;</el-radio>
              </el-form-item>
            <el-form-item label="" label-width="0px">
                <el-select v-model="selectValue1" multiple placeholder="请选择" :disabled="radio === '2'">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
              <el-form-item label="合约" label-width="60px">
                  <el-radio v-model="radio" label="2">&nbsp;</el-radio>
              </el-form-item>
            <el-form-item label="" label-width="0px">
                <el-select v-model="selectValue2" multiple placeholder="请选择" collapse-tags :disabled="radio === '1'">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
          </el-col>
      </el-row>
      <h3>选择客户</h3>
      <el-row>
          <el-col :span="14">
            <el-form-item label="账户组">
                <el-input placeholder="请输入内容，可模糊搜索" size="small"></el-input>
                <el-button type="primary" size="small">保存</el-button>
            </el-form-item>
            
          </el-col>
        <el-col :span="10">
            <el-form-item label="导入CSV">
                <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                :limit="3">
                <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="导入结果集">
                <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                :limit="3">
                <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
          </el-col>


          <el-col :span="24">
                <el-table
                    :data="tableData2"
                    stripe
                    border
                    height="200"
                    style="width: 100%">
                    <el-table-column prop="id" label="编号" width="80">
                       <template slot-scope="scope">
                            <el-checkbox>{{scope.row.id}}</el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column prop="code" label="账户组代码" width="100"></el-table-column>
                    <el-table-column prop="name" label="账户组名称" align="center"></el-table-column>
                    <el-table-column prop="code2" label="客户代码" width="100" align="center"></el-table-column>
                </el-table>
                <br>
                <div>
                    <div style="float:left">
                    <el-button type="primary" size="small">全选</el-button>
                    <el-button type="warning" size="small">删除</el-button>
                    </div>
                    <div style="float:right">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                        </el-pagination>
                    </div>
                </div>
          </el-col>
      </el-row>
      <h3>模板选择</h3>
      <el-row>
          <el-col :span="24">
              <el-form :model="form" label-width="100px" inline>
                <el-form-item label="场景名称">
                    <el-input size="small"></el-input>
                </el-form-item>
                <el-button type="primary" size="small">查询</el-button>
                <el-button type="primary" style="float:right" size="small" @click="modelVisible = true">新建模板</el-button>
              </el-form>
                <el-table
                    :data="tableData"
                    stripe
                    border
                    style="width: 100%">
                    <el-table-column prop="id" label="模板编号" width="80">
                        <template slot-scope="scope">
                            <el-checkbox>{{scope.row.id}}</el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="模板名称"></el-table-column>
                    <el-table-column prop="date" label="生成日期" width="100" align="center"></el-table-column>
                    <el-table-column prop="biaozhun" label="识别标准" width="100" align="center"></el-table-column>
                    <el-table-column prop="percent" label="使用率" width="100" align="center"></el-table-column>
                    <el-table-column label="操作" width="150" fixed="right" align="center">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                            <el-button type="text" size="small">删除</el-button>
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
          </el-col>
      </el-row>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose()" size="small">取 消</el-button>
    <el-button type="primary" @click="handleClose()" size="small">确 定</el-button>
  </span>
</el-dialog>
<model :visible="modelVisible" @close="handleModelClose"></model>
</div>
</template>

<script>
import model from '@/components/coefficient/create/model'

    export default {
        props: {
            visible: { type: Boolean, default: true }
        },
        components: { model },
        data() {
            return {
                dialogVisible: true,
                modelVisible: true,
                form: {
                    name: '',
                    date: ''
                },
                radio: '1',
                tableData: [{
                id: '001',
                name: '模板1',
                date: '2016-05-02',
                biaozhun: '标准',
                percent: '90%'
                }, {
                id: '002',
                name: '模板2',
                date: '2016-05-02',
                biaozhun: '标准',
                percent: '90%'
                }, {
                id: '003',
                name: '模板3',
                date: '2016-05-02',
                biaozhun: '标准',
                percent: '90%'
                }, {
                id: '004',
                name: '模板4',
                date: '2016-05-02',
                biaozhun: '标准',
                percent: '90%'
                }, {
                id: '005',
                name: '模板4',
                date: '2016-05-02',
                biaozhun: '标准',
                percent: '90%'
                }],
                options: [{
                value: '选项1',
                label: '合约1'
                }, {
                value: '选项2',
                label: '合约2'
                }, {
                value: '选项3',
                label: '合约3'
                }, {
                value: '选项4',
                label: '合约4'
                }, {
                value: '选项5',
                label: '合约5'
                }],
                tableData2: [
                    {id: '0001', code:'代码1', name: '名称1', code2: '代码1'},
                    {id: '0002', code:'代码2', name: '名称2', code2: '代码2'},
                    {id: '0003', code:'代码3', name: '名称3', code2: '代码3'},
                    {id: '0004', code:'代码4', name: '名称4', code2: '代码4'}
                ],
                selectValue1: [],
                selectValue2: []
            }
        },
        methods: {
            handleClose() {
                this.dialogVisible = false;
                this.$emit('close', false);
            },
            handleModelClose() {
                this.modelVisible = false;
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