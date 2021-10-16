import React from "react"
import GiTalk from "gatsby-plugin-gitalk"
// import { S9comment } from "gatsby-plugin-social9-comment"

const Comments = ({ post }) => {
  const gitalkConfig = {
    id: post.slug || post.id,
    title: post.frontmatter.title,
  }
  return <GiTalk options={gitalkConfig} />
}
//     // <S9comment/>

//       return (

//          <Gitalk options={gitalkConfig}/>
//       )
// )
export default Comments
