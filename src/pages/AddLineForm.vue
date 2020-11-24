<template>
  <div id="addline_form">
    <h2 class="hero">adicionar nova line</h2>

    <div class="form_block">
      <div class="block_item">
        <input type="text" placeholder="TAG" />
      </div>
      <div class="block_item">
        <input type="text" placeholder="Nome" />
      </div>
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
    max-width: 400px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);

    .hero {
      color: #000;
      padding: 20px 0;
      font-size: 14pt;
      text-align: center;
      margin-bottom: 10px;
      text-transform: uppercase;
      font-family: 'Lato', sans-serif;
    }

    .form_block {
      width: 100%;
      height: auto;
      @extend %flex-center;
      flex-direction: column;

      .block_item {
        width: 100%;
        height: auto;
        padding: 5px;
        @extend %flex-center;

        input {
          width: 90%;
          padding: 15px;
          font-size: 11pt;
          color: #2C3E50;
          border: solid 1px #ccc;
          font-family: 'Montserrat';
        }
      }
    }
  }
</style>