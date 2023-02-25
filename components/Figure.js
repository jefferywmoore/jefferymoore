import Image from 'next/image'

const Figure = ({ alt, src, srcurl, author, authorurl, host, hosturl }) => {
  if (!alt || !src || !author || !authorurl || !host || !hosturl) return null

  let image

  image = <img className="rounded w-full object-cover object-center" style={{ margin: '0', maxHeight: '480px' }} alt={alt} src={src} />
  let caption = (
    <figcaption className="text-center">
      Photo by {' '}
      <a href={authorurl} title={`Discover the profile of ${author}`}>
        {author}
      </a>{' '}
      from {' '}
      <a href={hosturl} title={`Open ${host}`}>
        {host}
      </a>
    </figcaption>
  )
  return (
    <figure className="print:hidden flex flex-col items-center relative">
      {srcurl ? (
        <a className="w-full" href={srcurl} title="See image">
          {image}
        </a>
      ) : (
        { image }
      )}
      {caption}
    </figure>
  )
}

export default Figure

{
  /* <Pexels
        src="https://images.pexels.com/photos/6368799/pexels-photo-6368799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        srcUrl="https://www.pexels.com/photo/board-with-slices-of-fresh-apples-and-knife-near-window-6368799/"
        author="Skylar Kang"
        authorUrl="https://www.pexels.com/TODO"
        alt="pommes"
        /> */
}
