<template>
    <div>
        <world-info></world-info>
        <position-grade></position-grade>
        <!-- <associated-data-tab></associated-data-tab> -->
    </div>
</template>

<script>
export default {
  name: "Coefficient",
  components: {
    WorldInfo: () => import("@/components/coefficient/worldInfo"),
    PositionGrade: () => import("@/components/coefficient/positionGrade"),
    AssociatedDataTab: () =>
      import("@/components/coefficient/associatedDataTab")
  },
  data() {
    return {};
  },
  computed: {
    // listParams() {
    //     let params = {
    //         pageSize: this.pageSize,
    //         pageZum: this.pageZum
    //
    //     };
    //     return params;
    // }
  },
  mounted() {
    //            console.log(this.list())
    //            {
    //              code: 200,
    //              msg: '啊啊啊',
    //                data: {
    //                    list: [],
    //                    total: 200,
    //                }
    //            }
    //            api.list({}).then(())s
  },
  methods: {
    // async btnData() {
    //     const response = await api.list(this.listParams);
    //     if (response.code === 200) {
    //         console.log(response.data);
    //     }
    // }
  }
};
</script>

<style lang="less">
</style>
