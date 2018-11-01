<template>
    <div class="worldInfo">
        <h1 class="h1">场景信息</h1>
        <el-form class="formBox" ref="form" :model="form" label-width="88px" size="small">
            <el-row>
                <el-col :span="24">
                    <el-col :span="7">
                        <el-form-item label="场景名称" prop="name">
                            <el-input v-model="form.name" placeholder="请输入场景名称" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <el-form-item label="场景备注" prop="remark"> 
                            <el-input v-model="form.remark" placeholder="请输入场景备注" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1" prop="several">
                        <el-form-item label="持仓排名前"> 
                            <el-input v-model="form.several" placeholder="请输入持仓排名前" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-col>
                <el-col :span="24">
                     <el-col :span="7">
                        <el-form-item label="合约" prop=" contract"> 
                            <el-input v-model="form.contract" placeholder="请输入合约" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <el-form-item label="客户列表" prop="clients"> 
                            <el-input v-model="form.clients" placeholder="请输入客户列表" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                        <el-form-item label="识别标准" prop="standard"> 
                            <el-input v-model="form.standard" placeholder="请输入识别标准" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                </el-col>
                <el-col :span="24">
                    <el-col :span="7">
                        <el-form-item label="品种" prop="variety"> 
                            <el-input v-model="form.variety" placeholder="请输入品种" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" :offset="1">
                        <el-form-item label="开始日期" prop="startDate">
                            <el-date-picker
                                v-model="startDate"
                                type="date"
                                placeholder="选择开始日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" :offset="2">
                        <el-form-item label="结束日期" prop="type">
                            <el-date-picker
                                v-model="endDate"
                                type="date"
                                placeholder="选择结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-col>
                <el-col :span="24" class="function">
                     <el-col :span="7">
                        <el-form-item label="前" prop="account"> 
                            <el-input style="width:30%" v-model="form.account" placeholder="请输账户数"></el-input>
                        <span>个账户</span>
                        </el-form-item>
                    </el-col>
                    <el-col  :span="7">
                        <el-button type="success" @click="amendClick" size="small">修改</el-button>
                        <el-button type="primary" @click="addDiscernIndexClick" size="small">新增识别指标</el-button>
                        <el-button type="primary" @click="addSceneClick" size="small">新增场景</el-button>
                    </el-col>
                      </el-col>
            </el-row>
        </el-form>
        <create :visible="dialogVisible" @close="handleClose"></create>
    </div>
</template>

<script>
import create from "@/components/coefficient/create/index";
export default {
  name: "Coefficient",
  components: { create },
  data() {
    return {
      form: {
        name: "", // 场景名称
        remark: "", // 场景备注
        several: "", // 持仓排名前
        contract: "cu1811", // 合约
        clients: "", // 客户列表
        standard: "", // 识别标准
        variety: "黄金", // 品种
        startDate: "", // 开始日期
        endDate: "", // 结束日期
        account: "10" // 前几个账户
      },
      startDate: "",
      endDate: "",
      dialogVisible: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    // 修改
    amendClick() {},
    // 新增识别指标
    addDiscernIndexClick() {},
    // 新增场景
    addSceneClick() {
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang="less">
.worldInfo {
  border: 1px solid #dcd5d3;
  width: 100%;
  margin-top: 35px;
  .h1 {
    margin: 0;
    padding: 20px 0 0 20px;
  }
  .formBox {
    padding: 20px 0;
    .function {
      display: flex;
      justify-content: space-between;
      padding-right: 20px;
    }
  }
}
</style>
