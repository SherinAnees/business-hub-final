/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BlogStanderd = ({ blogs }) => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogs.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === blogs.length - 1 ? "" : "mb-80"
                  }`}
                  key={blogItem.id}
                >
                  <div className="img">
                    <Link href={`/blog-details/blog-details-${blogItem.id}`}>
                      <a>
                        <img src={blogItem.image} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <Link
                          href={`/blog-details/blog-details-${blogItem.id}`}
                        >
                          <a className="date">
                            <span className="num">{blogItem.date.day}</span>
                            <span>{blogItem.date.month}</span>
                          </a>
                        </Link>
                        {/* <div className="tags">
                          {blogItem.tags.map((tag, index) => (
                            <Link key={index} href="/blog/blog-light">
                              {tag}
                            </Link>
                          ))}
                        </div> */}
                        <h4 className="title">
                          <Link
                            href={`/blog-details/blog-details-${blogItem.id}`}
                          >
                            {blogItem.title}
                          </Link>
                        </h4>
                        <p>{blogItem.content}</p>
                        <Link
                          href={`/blog-details/blog-details-${blogItem.id}`}
                        >
                          <a className="butn bord curve mt-30">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="pagination">
                <span className="active">
                  <Link href={`/blog/blog-light`}>1</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-light`}>2</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-light`}>
                    <a>
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </Link>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
