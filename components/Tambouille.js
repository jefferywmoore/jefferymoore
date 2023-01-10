import Figure from './Figure'
import siteMetadata from '@/data/siteMetadata'

const Tambouille = (techchefProps) => {
  const slug = Object.values(siteMetadata.authors).filter(
    (author) => author.name === techchefProps.author
  )[0].slug
  let props = {
    ...techchefProps,
    host: 'Tambouille',
    hosturl: siteMetadata.siteUrl,
    srcurl: techchefProps.src,
    authorurl: `${siteMetadata.siteUrl}/equipe#${slug}`,
  }
  return <Figure {...props} />
}
const TechChef = (techchefProps) => {
  const slug = Object.values(siteMetadata.authors).filter(
    (author) => author.name === techchefProps.author
  )[0].slug
  let props = {
    ...techchefProps,
    host: 'Tambouille',
    hosturl: siteMetadata.siteUrl,
    srcurl: techchefProps.src,
    authorurl: `${siteMetadata.siteUrl}/equipe#${slug}`,
  }
  return <Figure {...props} />
}

export default Tambouille
