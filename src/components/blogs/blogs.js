import React, { useEffect, useState } from 'react';
// import BlogsServices from '@/services/kuepaServices/BlogsServices';
import "./blogs.css";;

const Blogs = () => {
  // const blogsServices = new BlogsServices();
  const [blogsByAlliances, setBlogsByAlliances] = useState([])
  const [data, setData] = useState(0)
  useEffect(() => {
    getBlogsInformation('default');
  }, [])

  const getBlogsInformation = async (idCategory) => {
    let params = {};

    if (idCategory === 'default') {
      params = {
        alliance: '638a1679612c44cccc340f42',
        status: 'public'
      }
    } else {
      params = {
        alliance: '638a1679612c44cccc340f42',
        status: 'public',
        filter: {
          category_by_id: [idCategory]
        }
      }
    }

    try {
      // const response = await blogsServices.list(params)
      // console.log('Enodrac - response', response)
      // if (!response) {
      //   setBlogsByAlliances([])
      //   return
      // }

      // setBlogsByAlliances(response?.response.data.publication_categories?.slice(0, 3))

    } catch (error) {
      console.log(error)
      setBlogsByAlliances([])
      return
    }
  }

  useEffect(() => {
    setTimeout(() => {
      let cards_container = document.getElementById('scroll_cards_container')
      if (cards_container) {
        cards_container.addEventListener('scroll', detectScroll)
      }
    }, 1000);
  }, [])

  const detectScroll = () => {
    let scroll = document.getElementById('scroll_cards_container')
    let test = Math.floor(scroll?.scrollLeft / ((scroll.scrollWidth - scroll.offsetWidth) / 3))
    setData(test)
  }

  const handleScroll = (offset) => {
    let scroll = document.getElementById('scroll_cards_container')
    if (scroll) {
      scroll.scrollLeft = offset * ((scroll.scrollWidth - scroll.offsetWidth) / 2)
    }
  }

  return (
    <div className={`mobile_blogs_container`}>
      <div className={`title`}>
        Blog Kueparlantes
      </div>
      <div className={`subtitle`}>
        Mantente informado con nuestras noticias, comunicados, datos curiosos, cultura general e información
        <div>de tu interés.</div>
      </div>
      <div id={`scroll_cards_container`} className={`cards_container`}>
        {blogsByAlliances?.map((blog, index) =>
          <div className={`custom_card`}
            onClick={() => handleScroll(index)}
          >
            <div className={`background_image`}>
              <img src={blog?.image_post} alt='' width='311px' height='160px' />
            </div>
            <div className={`top_text`}>
              {blog?.title}
            </div>
            <div className={`middle_text`}>
              {blog?.description}
            </div>
            <div className={`bottom_text`}>
              <a href={blog?.redirect_url} target="_blank" rel="noreferrer">
                Seguir leyendo
              </a>
            </div>
          </div>
        )}
      </div>
      <div className={`carrousel_navigation`}>
        <div className={`item ${data === 0 ? 'active' : ''}`}
          onClick={() => handleScroll(0)}
        />
        <div className={`item ${data === 1 ? 'active' : ''}`}
          onClick={() => handleScroll(1)}
        />
        <div className={`item ${data === 2 ? 'active' : ''}`}
          onClick={() => handleScroll(2)}
        />
      </div>
    </div>
  );
};

export default Blogs;
