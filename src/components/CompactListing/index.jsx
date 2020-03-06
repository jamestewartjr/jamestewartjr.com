import React from 'react'
import "./CompactListing.scss";

const CompactListing = (props) => {
  const {data} = props;
  return (
    <section className="compact-listing">
      {data.map(post => {
        return (
          <a key={post.title} href={post.path} target="_blank" rel="noopener noreferrer">
            <div className="each">
              <h2>
                {/* <img src={post.img} alt={post.title} /> */}
                {post.title}
              </h2>
            </div>
          </a>
        )
      })}
    </section>
  )
}

export default CompactListing;