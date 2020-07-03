<template>
  <div class="scroll-wrap">
    <ul class="scroll-content" :style="{ top }">
      <li v-for="item in prizeList">{{item.name}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      prizeList: [
        { name: "关于我们\xa0\xa0\xa0(About)" },
        {
          name:
            "营业时间:周一至周五8:30-20:30\xa0\xa0\xa0\xa0\xa0\xa0\xa0周六至周日8:30-21:30"
        },
        { name: "地址 \xa0Add:福建省\xa0\xa0\xa0厦门市\xa0\xa0\xa0厦门大学" },
        { name: "电话\xa0Tel:(00)11-2222" }
      ],
      activeIndex: 0
    };
  },

  computed: {
    top() {
      return -this.activeIndex * 52 + "px";
    }
  },

  mounted() {
    setInterval(_ => {
      if (this.activeIndex < this.prizeList.length) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    }, 1000);
  }
};
</script>

<style scoped>
.scroll-wrap {
  width: 1460px;
  height: 60px;
  border: 1px solid rgb(190, 106, 37);
  overflow: hidden;
  background-color: rgb(231, 214, 204);
  padding-left: 60px;
}

.scroll-content {
  position: relative;
  transition: top 1s;
}
li {
  line-height: 52px;
  text-align: left;
  font-style: italic;
  font-size: 1.5em;
}
</style>
