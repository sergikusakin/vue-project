<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import toggleMixin from "@/mixins/toggleMixin";
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-dialog",
  mixins: [toggleMixin],
  mounted() {
    console.log("dialog mounted");
  },
  props: {
    // show: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  methods: {
    // hideDialog() {
    //   this.$emit("update:show", false);
    // },
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog-content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
