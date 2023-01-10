import Figure from './Figure'

const Wikipedia = (wikipediaProps) => {
  let props = {
    ...wikipediaProps,
    host: 'Wikipedia',
    hosturl: 'https://wikipedia.org',
  }
  return <Figure {...props} />
}

export default Wikipedia
