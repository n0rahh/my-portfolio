<template>
  <div class="options-switch d-flex align-center">
    <input
      id="toggle"
      type="checkbox"
    >
    <label
      for="toggle"
      class="button"
    />
  </div>
</template>

<style lang="scss" scoped>
#toggle {
  display: none;
}

.button {
  display: inline-block;
  width: 60px;
  height: 25px;
  background-color: #fff;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  &::after {
    content: url('../../assets/icons/sun.svg');
    width: 30px;
    height: 30px;
    background-color: #e03c3c;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, .25);
    position: absolute;
    top: -2.5px;
    left: 0;
    display: grid;
    place-content: center;
    line-height: 0;
    transition: 1s;
    transform: 1s ease-in;
  }
}

#toggle:checked + .button {
  &::after {
    content: url('../../assets/icons/moon.svg');
    background-color: #28309b;
    transform: translateX(30px) rotate(360deg);
  }
}
</style>