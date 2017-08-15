<template>
  <p>marked</p>
</template>
<script type="text/javascript">
import marked from 'marked'

var renderer = new marked.Renderer()
renderer.heading = function (text, level) {
  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  return '<h' + level + '><a name="' +
          escapedText +
           '" class="anchor" href="#' +
           escapedText +
           '"><span class="header-link"></span></a>' +
            text + '</h' + level + '>';
}
console.log(marked('# er你好', {renderer: renderer}))
window.marked = marked

export default{
  name: 'marked'
}
</script>
