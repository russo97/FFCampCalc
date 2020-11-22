<template>
  <div id="addline_form">
    <h2 class="hero">adicionar nova line</h2>

    <div class="form_block">
      <div class="block_item">
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddLineForm'
}
</script>

<style lang="scss">
  @import '../../public/assets/scss/global.scss';

  #addline_form {
    width: 80%;
    height: auto;
    padding: 10px;
    max-width: 900px;

    .hero {
      padding: 5px 0;
      color: $text_color;
      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;
      background-color: $base_color;
      font-family: 'Big Shoulders Stencil Text', cursive;
    }

    .form_block {
      width: 100%;
      height: auto;
      display: flex;
    }
  }
</style>