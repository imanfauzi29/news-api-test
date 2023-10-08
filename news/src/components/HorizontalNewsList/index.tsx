import { FieldTimeOutlined, UserOutlined } from "@ant-design/icons"
import { Image, List } from "antd"
import { TNews } from "../../types"
import { base64, dateTimes } from "../../helpers"
import React from "react"
import { Link } from "react-router-dom"

interface NewsProps {
  data: TNews
  title?: (data: string) => React.ReactNode
  hideAuthor?: boolean
}
const HorizontalNewsList = ({ data, title, hideAuthor }: NewsProps) => {
  const searchParams = (data: TNews): string => {
    const encodeData = base64(JSON.stringify(data)).encode()

    const params = {
      query: encodeData,
    }

    return new URLSearchParams(params).toString()
  }
  return (
    <>
      <List.Item>
        <List.Item.Meta
          avatar={
            <Image
              src={data.urlToImage}
              preview={false}
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
          }
          title={
            <>
              <Link to={{ pathname: "/detail", search: searchParams(data) }}>
                {!title ? data.title : title(data.title)}
              </Link>
            </>
          }
          description={
            <>
              <div className="flex">
                <div>
                  <FieldTimeOutlined size={12} />
                  <small className="ml-1">{dateTimes(data.publishedAt)}</small>
                </div>
                {!hideAuthor && (
                  <>
                    <span className="mx-2">|</span>
                    <div>
                      <UserOutlined />
                      <small className="ml-1">{data.author}</small>
                    </div>
                  </>
                )}
              </div>
              <span className="multiline-truncate">{data.description}</span>
            </>
          }
        />
      </List.Item>
    </>
  )
}

export default HorizontalNewsList
