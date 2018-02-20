function defautlItemComponentFactory (item) {

  switch(item.metadata.type){
  case 'VIDEO':
    return 'item-video'
  default:
    return 'item-default'
  }
}

export default defautlItemComponentFactory
