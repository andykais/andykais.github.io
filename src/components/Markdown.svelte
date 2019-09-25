<script>
  import MarkdownIt from 'markdown-it'

  const md = new MarkdownIt({ html: true })
  const renderFn = inputStr => md.render(inputStr)

  export let render = ''

  let rendered = md.render(render)
</script>

<div>
  {@html rendered}
</div>
