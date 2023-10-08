import { FieldTimeOutlined, UserOutlined } from "@ant-design/icons"
import { Carousel, Image, Space } from "antd"
import styles from "./carouselNews.module.css"
import { getTopHeadlines } from "../../helpers/networks"
import { useEffect, useState } from "react"
import { TNews } from "../../types"
import { base64, dateTimes } from "../../helpers"
import { Link } from "react-router-dom"

const CarouselNews = () => {
  const [carouselHeadlines, setCarouselHeadlines] = useState<TNews[]>([])

  const getHeadlines = async () => {
    try {
      const res = await getTopHeadlines({ country: "us", pageSize: 10 })
      const { articles } = res

      setCarouselHeadlines(articles)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHeadlines()
  }, [])

  const searchParams = (data: TNews): string => {
    const encodeData = base64(JSON.stringify(data)).encode()

    const params = {
      query: encodeData,
    }

    return new URLSearchParams(params).toString()
  }

  return (
    <>
      <Carousel
        lazyLoad="progressive"
        className="h-full"
        rootClassName="h-full"
        pauseOnHover
        autoplay
      >
        {carouselHeadlines.length &&
          carouselHeadlines.map(
            (
              { urlToImage, author, description, title, publishedAt, source },
              i
            ) => (
              <div
                key={i}
                className={`relative h-full rounded-md overflow-hidden ${styles.carousel_wrapper}`}
              >
                <Image
                  className="w-full max-h-200 object-cover h-full"
                  width={500}
                  height={500}
                  preview={false}
                  src={urlToImage}
                />
                <div
                  className={`absolute bottom-0 w-full ${styles.carousel__container}`}
                >
                  <div className={styles.carousel__content}>
                    <Space direction="vertical" size={"small"}>
                      <div className={styles.carousel__content_source}>
                        {source.name}
                      </div>
                      <Link
                        to={{
                          pathname: "/detail",
                          search: searchParams(carouselHeadlines[i]),
                        }}
                        className={`link multiline-truncate ${styles.carousel_content_title}`}
                      >
                        {title}
                      </Link>
                      <div className="flex">
                        <div>
                          <FieldTimeOutlined size={12} />
                          <small className="ml-1">
                            {dateTimes(publishedAt)}
                          </small>
                        </div>
                        <span className="mx-2">|</span>
                        <div>
                          <UserOutlined />
                          <small className="ml-1">{author}</small>
                        </div>
                      </div>
                      <div className={styles.carousel_content_description}>
                        {description}
                      </div>
                    </Space>
                  </div>
                </div>
              </div>
            )
          )}
      </Carousel>
    </>
  )
}

export default CarouselNews
