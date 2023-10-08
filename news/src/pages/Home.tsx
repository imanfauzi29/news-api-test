import { Button, Col, List, Row } from "antd"
import {
  CardNews,
  CarouselNews,
  HorizontalNewsList,
  Layouts,
} from "../components"
import { getEverythingNews, getTopHeadlines } from "../helpers/networks"
import { useEffect, useState } from "react"
import { TNews } from "../types"
import { LoadingOutlined } from "@ant-design/icons"

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [listNews, setListNews] = useState<TNews[]>([])
  const [cardNews, setCardNews] = useState<TNews[]>([])

  const getBBCNews = async () => {
    try {
      const res = await getTopHeadlines({ sources: "bbc-news", pageSize: 20 })
      const { articles } = res

      setListNews(articles)
    } catch (error) {
      console.log(error)
    }
  }

  const getEverything = async (page?: number) => {
    setIsLoading(true)
    try {
      const res = await getEverythingNews({
        sources: "bbc-news",
        pageSize: 12,
        page,
      })
      const { articles } = res

      setCardNews((prev) => [...prev, ...articles])
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getBBCNews()
    getEverything(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddMore = () => {
    setPage((prev) => prev + 1)
    getEverything(page)
  }

  return (
    <>
      <Layouts className="layout-mt">
        <div className="max-w-md mx-auto">
          <h1 className="title">Berita Harian</h1>
          <Row gutter={16}>
            <Col span={12}>
              <CarouselNews />
            </Col>
            <Col span={12}>
              <div className="max-h-500 overflow-auto">
                <List
                  itemLayout="horizontal"
                  dataSource={listNews}
                  renderItem={(item, i) => (
                    <HorizontalNewsList key={i} data={item} />
                  )}
                />
              </div>
            </Col>
          </Row>

          <h1 className="title">Berita Terkini</h1>
          <Row gutter={[16, 16]} className="mt-4">
            {cardNews.map((item, i) => (
              <Col span={6} key={i}>
                <CardNews data={item} />
              </Col>
            ))}
          </Row>

          <div className="mt-4 flex justify-center">
            <Button type="primary" disabled={isLoading} onClick={handleAddMore}>
              {isLoading ? (
                <>
                  <LoadingOutlined />
                  <span>Loading</span>
                </>
              ) : (
                <span>Muat lebih banyak</span>
              )}
            </Button>
          </div>
        </div>
      </Layouts>
    </>
  )
}

export default Home
