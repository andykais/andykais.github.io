<script>
  import Image from './_components/Image.svelte'
  import { icons } from '../../icons'
  /* import Icon from '../../components/Icon.svelte' */
  import IconButton from '../../components/IconButton.svelte'

  const transitionTime = 0.8 * 1000
  const easeHalfwayPoint = transitionTime * (13 / 20)
  const pages = [
    {
      art: null
    },
    {
      art: './moleskine-art/50005497848_ef7cfa53d7_o.png'
    },
    {
      art: './moleskine-art/49202443272_8ab02f01cd_o.png'
    },
    {
      art: './moleskine-art/49202443747_051108e868_o.png'
    },
    {
      art: './moleskine-art/49202233886_4b9ed96716_o.png'
    },
    {
      art: './moleskine-art/49201749563_2c4bd5a856_o.png'
    },
    {
      art: './moleskine-art/49202443027_11b354baf5_o.png'
    },
    {
      art: './moleskine-art/49201749408_48fef4ae51_o.png'
    },
    {
      art: './moleskine-art/49202234051_80096f3af4_o.png'
    }
  ].map((data, i) => ({
    ...data,
    zIndex: -(i + 1),
    xOffset: 0,
    flipped: false,
    covered: false,
    thisElement: null
  }))
  let pageIndex = 0

  let turningNextPage = false
  let turningPrevPage = false

  function nextPage() {
    turningNextPage = true
    if (pages.length > pageIndex) {
      pages[pageIndex].flipped = true
      nextHalfway(pageIndex)
      if (pages[pageIndex + 1]) pages[pageIndex + 1].covered = true
      pageIndex++
      setTimeout(() => (turningNextPage = false), transitionTime)
    }
  }
  function prevPage() {
    turningPrevPage = true
    if (pageIndex > 0) {
      pageIndex--
      pages[pageIndex].flipped = false
      if (pages[pageIndex - 1]) pages[pageIndex - 1].covered = true
      prevHalfway(pageIndex)
      for (let i = 0; i < pages.length; i++) {
        if (i < pageIndex) pages[i].xOffset += 2
      }
      // when transition is complete
      setTimeout(() => (turningPrevPage = false), transitionTime)
    }
  }

  function nextHalfway(pageIndex) {
    setTimeout(() => {
      pages[pageIndex].zIndex *= -1
      pages[pageIndex].xOffset = 0
      // cover the prior page
      if (pages[pageIndex - 1]) pages[pageIndex - 1].covered = true
      if (pages[pageIndex + 1]) pages[pageIndex + 1].covered = false
      for (let i = 0; i < pages.length; i++) {
        if (i < pageIndex) pages[i].xOffset -= 2
      }
    }, easeHalfwayPoint)
  }
  function prevHalfway(pageIndex) {
    setTimeout(() => {
      pages[pageIndex].zIndex *= -1
      // cover the latter page
      if (pages[pageIndex - 1]) pages[pageIndex - 1].covered = false
      if (pages[pageIndex + 1]) pages[pageIndex + 1].covered = true
    }, easeHalfwayPoint)
  }

  function onKeyPress(e) {
    switch (e.key) {
      case 'ArrowRight':
        nextPage()
        break
      case 'ArrowLeft':
        prevPage()
        break
    }
  }

  let rotation = 0
  // TODO do this smarter!
  let rotationOffset = 0
  function rotateLeft() {
    rotation += 90
    if (rotation % 180 === 0) rotationOffset = 0
    else rotationOffset = 0.5 // inches
  }
  function rotateRight() {
    rotation -= 90
    if (rotation % 180 === 0) rotationOffset = 0
    else rotationOffset = 0.5 // inches
  }
</script>

<style>
  #opened-moleskine {
    width: calc(3.5in * 2);
    height: calc(3.5in * 2);
    /* height: 5.5in; */
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  #rotateable-moleskine {
    transform-origin: center;
    width: calc(3.5in * 2);
    height: 5.5in;
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: transform 0.2s ease-in-out;
  }
  #moleskine {
    width: 3.5in;
    height: 5.5in;

    grid-column-start: 2;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    perspective: 3000px; /* Remove this if you don't want the 3D effect */
  }

  .page {
    display: flex;
    grid-row: 1;
    grid-column: 1;

    background-color: transparent;
    width: 100%;
    height: 100%;

    border-radius: 0 25px 25px 0;
  }
  .page:first-child.flipped {
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.5);
  }
  .page:last-child:not(.flipped) {
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.5);
  }
  .page {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    flex-grow: 1;

    transition: transform 0.8s ease-in, box-shadow 0.5s ease, width 0.3s linear;
    transform-style: preserve-3d;
    transform-origin: left;
    transform: rotateY(0);
    position: relative;
  }
  .page.flipped {
    transform: rotateY(-180deg);
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .front .shadow {
    transition: background-color 0.8s ease;
  }
  .page:not(.flipped) .front .shadow {
    transition: background-color 0.3s ease-out;
  }
  .back .shadow {
    transition: background-color 0.3s ease;
  }
  .flipped .front .shadow {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .flipped.covered .back .shadow {
    background-color: rgba(0, 0, 0, 0.2);
  }

  /* these are book crease shadows */
  .back .shadow {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 98%, rgba(0, 0, 0, 0.12) 100%);
  }
  .front .shadow {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 2%);
  }

  .covered:not(.flipped) .front .shadow {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .page:not(.flipped) .back .shadow {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .front,
  .back {
    grid-row-start: 1;
    grid-column-start: 1;
    backface-visibility: hidden;
    display: grid;
  }
  .back {
    transform: rotateY(180deg);
    z-index: 1;
    /* background-color: #e8e2d6; */
    /* /1* background: rgb(255,255,255); *1/ */
    /* background-image: url('https://www.transparenttextures.com/patterns/natural-paper.png'); */
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    /* background-image: url('https://www.transparenttextures.com/patterns/natural-paper.png'), linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(140,102,58,1) 20%, rgba(140,102,58,1) 100%); */
  }
  /* .back .content, .blank-paper { */
  .blank-paper {
    background-color: #e8e2d6;
    /* background: rgb(255,255,255); */
    background-image: url('https://www.transparenttextures.com/patterns/natural-paper.png');
  }

  .moleskine-cover.front .content {
    background-image: url('./cardboard-opacity.png'),
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 20%,
        rgba(140, 102, 58, 1) 20%,
        rgba(140, 102, 58, 1) 100%
      );
    background-size: initial;
  }
  .moleskine-cover.back,
  .moleskine-back {
    background-image: url('./cardboard-opacity.png'),
      linear-gradient(
        90deg,
        rgba(140, 102, 58, 1) 0%,
        rgba(140, 102, 58, 1) 80%,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 1) 100%
      );
  }
  .content,
  .front .shadow {
    border-radius: 0 25px 25px 0;
  }
  .back,
  .back .shadow,
  .back .content {
    border-radius: 25px 0 0 25px;
  }

  .front .content {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .controls {
    display: grid;
    grid-template-columns: 1fr auto auto auto auto 1fr;
    grid-gap: 10px
  }

  /* #placeholder-1 .front .content { */
  /*   background-image: url('https://www.transparenttextures.com/patterns/natural-paper.png'), */
  /*     linear-gradient( */
  /*       90deg, */
  /*       rgba(0, 0, 0, 1) 0%, */
  /*       rgba(0, 0, 0, 1) 20%, */
  /*       rgba(140, 102, 58, 1) 20%, */
  /*       rgba(140, 102, 58, 1) 100% */
  /*     ); */
  /*   /1* background: radial-gradient( *1/ */
  /*   /1*       circle at 0% 50%, *1/ */
  /*   /1*       rgba(96, 16, 48, 0) 9px, *1/ */
  /*   /1*       #613 10px, *1/ */
  /*   /1*       rgba(96, 16, 48, 0) 11px *1/ */
  /*   /1*     ) *1/ */
  /*   /1*     0px 10px, *1/ */
  /*   /1*   radial-gradient(at 100% 100%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px), *1/ */
  /*   /1*   #8a3; *1/ */
  /*   /1* background-size: 20px 20px; *1/ */
  /* } */

  /* #placeholder-2 .front .content { */
  /*   background: linear-gradient(115deg, transparent 75%, rgba(255, 255, 255, 0.8) 75%) 0 0, */
  /*     linear-gradient(245deg, transparent 75%, rgba(255, 255, 255, 0.8) 75%) 0 0, */
  /*     linear-gradient(115deg, transparent 75%, rgba(255, 255, 255, 0.8) 75%) 7px -15px, */
  /*     linear-gradient(245deg, transparent 75%, rgba(255, 255, 255, 0.8) 75%) 7px -15px, #36c; */
  /*   background-size: 15px 30px; */
  /* } */
  /* #placeholder-3 .front .content { */
  /*   background: linear-gradient(45deg, #92baac 45px, transparent 45px) 64px 64px, */
  /*     linear-gradient( */
  /*       45deg, */
  /*       #92baac 45px, */
  /*       transparent 45px, */
  /*       transparent 91px, */
  /*       #e1ebbd 91px, */
  /*       #e1ebbd 135px, */
  /*       transparent 135px */
  /*     ), */
  /*     linear-gradient( */
  /*       -45deg, */
  /*       #92baac 23px, */
  /*       transparent 23px, */
  /*       transparent 68px, */
  /*       #92baac 68px, */
  /*       #92baac 113px, */
  /*       transparent 113px, */
  /*       transparent 158px, */
  /*       #92baac 158px */
  /*     ); */
  /*   background-color: #e1ebbd; */
  /*   background-size: 128px 128px; */
  /* } */
</style>

<div id="opened-moleskine">
  <div
    id="rotateable-moleskine"
    style="transform: rotate({rotation}deg) translateX({rotationOffset}in)">
    <div id="moleskine">
      {#each pages as { flipped, zIndex, xOffset, covered, art }, i}
        <!-- style="z-index:{zIndex}; left: {xOffset}px;" -->
        <div
          class="page"
          class:flipped
          class:covered
          style="z-index:{zIndex}; width: calc(100% - {xOffset}px);"
          bind:this={pages[i].thisElement}
          id="placeholder-{i + 1}">
          <div class="front" class:moleskine-cover={i === 0}>
            <div class="shadow" />
            {#if i === 0}
              <div class="content" />
            {:else}
              <Image src={art} />
            {/if}
          </div>
          <div class="back" class:moleskine-cover={i === pages.length - 1}>
            <div class="shadow" />
            {#if i === pages.length - 1}
              <div class="content moleskine-back" />
            {:else}
              <div class="content blank-paper" />
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<svelte:window on:keydown={onKeyPress} />
<div class="controls">
  <span />
  <IconButton icon={icons.RotateLeft} onClick={rotateLeft} />
  <IconButton icon={icons.ArrowLeft} onClick={prevPage} disabled={pageIndex === 0} />
  <IconButton icon={icons.ArrowRight} onClick={nextPage} disabled={pageIndex === pages.length} />
  <IconButton icon={icons.RotateRight} onClick={rotateRight} />
  <span />
</div>
