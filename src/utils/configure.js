import defautlItemComponentFactory from './items';
import ItemVideo from '@/components/items/ItemVideo'
import ItemDefault from '@/components/items/ItemDefault'


const config = {
  method: 'get',
  baseURL: 'https://videos.cern.ch/api/records/',
  headers: {
      'Content-Type': 'application/json',

  },
  itemComponents: {ItemVideo, ItemDefault},
  itemComponentFactory: defautlItemComponentFactory
}

export default config
