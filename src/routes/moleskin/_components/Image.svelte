<script>
  export let src
</script>

<style>
  .container, .content, .underfit-paper {

    border-radius: 0 25px 25px 0;
  }
  .container {
    width: 3.5in;
    height: 5.5in;
    position: relative;
  }
  .container .content {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
    position: absolute;
  }
  .underfit-paper {
    background-color: #e8e2d6;
    background-image: url('https://www.transparenttextures.com/patterns/natural-paper.png');

    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>

<div class="container">
  <div class="underfit-paper" />
  <div class="content" style="background-image: url({src})" />
</div>
