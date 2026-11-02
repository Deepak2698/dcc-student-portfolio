'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)

  const giscusReady =
    siteMetadata.comments?.provider !== 'giscus' || !!siteMetadata.comments.giscusConfig?.repo
  // Hidden until a comments provider is configured (see siteMetadata.js)
  if (!siteMetadata.comments?.provider || !giscusReady) {
    return null
  }
  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      ) : (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
    </>
  )
}
