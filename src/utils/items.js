function defaultItemTemplateFactory (createElement, item) {

  switch(item.metadata.type){
  case 'VIDEO':
    return  createElement( 'div', item.metadata.title.title)
  case 'FOOTAGE':
    return createElement( 'div', {style: { color: 'blue'}}, item.metadata.title.title)
  default:
    return createElement('div', 'Dunno')
  }
}

export default defaultItemTemplateFactory
