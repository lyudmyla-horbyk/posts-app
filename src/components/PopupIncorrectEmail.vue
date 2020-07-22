<template>
  <div class="popup-wrapper">
    <div class="backdrop"></div>
    <div class="popup" ref="popup">
      <div class="popup-content">
        <form class="incorect-email-form">
          <p>Error</p>
          <a href="#">
            <i v-on:click="closePopup" class="fas fa-times"></i>
          </a>
          <p>No such user</p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
    listener(event) {
      const popupElement = this.$refs.popup;
      const isClickedInsidePopup = event.path.includes(popupElement);
      if (!isClickedInsidePopup) {
        this.closePopup();
      }
    }
  },
  mounted() {
    setTimeout(() => {
      window.addEventListener("click", this.listener);
    });
  },
  beforeDestroy() {
    window.removeEventListener("click", this.listener);
  }
};
</script>

<style scoped lang="scss">
.popup-wrapper {
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 1;
  }
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    .popup-content {
      padding: 20px;
      min-width: 320px;
      max-width: 100vw;
      width: 550px;
      box-sizing: border-box;
      .incorect-email-form {
        height: 100%;
        background-color: white;
        border-radius: 5px;
        padding: 30px;
        position: relative;
      }
      p {
        font: 20px "Maven Pro", sans-serif;
        text-align: center;
        line-height: 1.5;
      }
      a {
        color: black;
        font-size: 30px;
        position: absolute;
        right: 20px;
        top: 20px;
      }
    }
  }
}
</style>
