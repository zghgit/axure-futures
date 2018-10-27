<template>
    <div class="portal">
        <el-row>
            <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }" shadow="hover" class="card">
                    <div class="circle circle1"></div>
                    <div style="padding: 14px;">
                        <span>研究支撑平台</span>
                        <div class="tips clearfix">描述</div>
                        <div class="bottom clearfix">
                            <el-button type="text" class="button" @click="handle()">进入</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }" shadow="hover" class="card">
                    <div class="circle circle2"></div>
                    <div style="padding: 14px;">
                        <span>数据分析工具</span>
                        <div class="tips clearfix">描述</div>
                        <div class="bottom clearfix">
                            <el-button type="text" class="button" @click="handle()">进入</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }" shadow="hover" class="card">
                    <div class="circle circle3"></div>
                    <div style="padding: 14px;">
                        <span>配置管理</span>
                        <div class="tips clearfix">描述</div>
                        <div class="bottom clearfix">
                            <el-button type="text" class="button" @click="handle()">进入</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }" shadow="hover" class="card">
                    <div class="circle circle4"></div>
                    <div style="padding: 14px;">
                        <span>任务管理</span>
                        <div class="tips clearfix">描述</div>
                        <div class="bottom clearfix">
                            <el-button type="text" class="button" @click="handle()">进入</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        methods: {
            handle() {
                this.$router.push({ path: 'home' })
            }
        }
    }
</script>

<style lang="less" scoped>
.portal {
    padding: 50px 0;
}
.card {
    width: 180px;
    margin: 0 auto;
    text-align: center;

    .tips {
        height: 50px;
        padding: 10px; 
    }

    .bottom {
        padding: 10px;
    }
}

.circle {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #ccc;
    margin: 20px auto 10px auto;
}

.circle1 {
    background-color: rgb(38, 173, 96);
}

.circle2 {
    background-color: rgb(231, 126, 35);
}

.circle3 {
    background-color: rgb(40, 127, 181);
}

.circle4 {
    background-color: rgb(49, 183, 188);
}
</style>