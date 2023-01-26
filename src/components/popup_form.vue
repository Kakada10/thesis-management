<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <i @click="close" class="far fa-times-circle"></i>
          <!-- Modal Content -->
          <slot />
          <button @click="close" type="button" style="background: red ; margin-right: 20px " >Cancel</button>
          <button @click="submit" type="button" >Submit</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "popup_form",
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
      return { close }
    };

    const submit = () => {
      emit("submitted");
      return { submit }
    };

    return { close , submit };
  },
};
</script>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

  .modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }

  .modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }

  .modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }

  .modal-animation-inner-leave-to {
    transform: scale(0.8);
  }

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);

  .modal-inner {
    position: relative;
    max-width: 500px;
    width: 80%;
    height: 600px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    padding: 10px;
    
    i {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 20px;
      cursor: pointer;
      height: 100px;
      &:hover {
        color: crimson;
      }
    }

    button {
      padding: 10px 20px;
      border: none;
      font-size: 16px;
      background-color: green;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>