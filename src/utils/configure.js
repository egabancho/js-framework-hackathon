import defautlItemTemplateFactory from './items';

const config = {
  method: 'get',
  baseURL: 'https://videos.cern.ch/api/records/',
  headers: {
      'Content-Type': 'application/json',

  },
  itemTemplateFactory: defautlItemTemplateFactory
}

export default config
