import React from 'react'

import './YoutubeEmbed.css'

const YoutubeEmbed = ({ embedId, width, height, videoTitle }) => {
  const html = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${embedId}?autoplay=1><img src=https://img.youtube.com/vi/${embedId}/hqdefault.jpg alt='Embedded Glade Foundation Video - 2022'><span>▶</span></a>`
  return (
  <div className="youtube-embed">
    <iframe
      width={width}
      height={height}
      frameBorder="0"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      srcDoc={html}
    />
    <p className="youtube-embed-video-title">{ videoTitle }</p>
  </div>
  )
}

export default YoutubeEmbed