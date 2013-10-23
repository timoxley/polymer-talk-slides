module.exports = function(options) {
  return [
    '<polymer-element name="'+options.name+'">',
      '<template>'+options.template+'</template>',
      '<script>',
        'Polymer('+options.name+', '+options.script+')',
      '</script>',
    '</polymer-element>'
  ].join('\n')
}
