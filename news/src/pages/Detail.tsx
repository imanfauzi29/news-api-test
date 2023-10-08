import { Link, useLocation, useNavigate } from "react-router-dom"
import { TNews } from "../types"
import { HorizontalNewsList, Layouts } from "../components"
import { Button, Col, Image, List, Row, Space } from "antd"
import {
  FieldTimeOutlined,
  LeftOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { base64, dateTimes } from "../helpers"
import { useEffect, useState } from "react"
import { getTopHeadlines } from "../helpers/networks"

const initialDetail: TNews = {
  author: "",
  content: "",
  description: "",
  publishedAt: "",
  source: { id: "", name: "" },
  title: "",
  url: "",
  urlToImage: "",
}

const Detail = () => {
  const [detailList, setDetailList] = useState<TNews>(initialDetail)
  const [listNews, setListNews] = useState<TNews[]>([])

  const navigate = useNavigate()
  const location = useLocation()

  const search = location.search

  const parseQuery = (search: string) => {
    const getQuery = new URLSearchParams(search).get("query")

    if (!getQuery) throw new Error("Not found")

    const decode = base64(getQuery).decode()
    const parseNews = JSON.parse(decode)

    setDetailList(parseNews)
  }

  const getBBCNews = async () => {
    try {
      const res = await getTopHeadlines({ sources: "bbc-news", pageSize: 20 })
      const { articles } = res

      setListNews(articles)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    parseQuery(search)
    getBBCNews()

    return () => {
      setDetailList(initialDetail)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleBackPage = () => {
    navigate("/")
  }
  return (
    <>
      <Layouts className="layout-mt">
        <div className="max-w-md mx-auto">
          <div>
            <Button onClick={handleBackPage}>
              <LeftOutlined />
              <span> Kembali</span>
            </Button>
          </div>
          <Row gutter={50} className="mt-4">
            <Col span={16}>
              <Space direction="vertical" style={{ display: "flex" }}>
                <h1>{detailList.title}</h1>

                <div className="flex">
                  <div>
                    <FieldTimeOutlined size={12} />
                    <small className="ml-1">
                      {dateTimes(detailList.publishedAt)}
                    </small>
                  </div>
                  <span className="mx-2">|</span>
                  <div>
                    <UserOutlined />
                    <small className="ml-1">{detailList.author}</small>
                  </div>
                </div>

                <Image
                  className="rounded-md w-full"
                  src={detailList.urlToImage}
                />

                <small className="description-detail">
                  {detailList.description}
                </small>

                <p className="">{detailList.content}</p>
                <Link to={detailList.url}>Lihat sumber berita </Link>
              </Space>
            </Col>
            <Col span={8}>
              <List
                itemLayout="horizontal"
                dataSource={listNews}
                renderItem={(item, i) => (
                  <HorizontalNewsList
                    key={i}
                    data={item}
                    title={(title) => (
                      <span className="multiline-truncate">{title}</span>
                    )}
                    hideAuthor
                  />
                )}
              />
            </Col>
          </Row>
        </div>
      </Layouts>
    </>
  )
}

export default Detail
