import { FieldTimeOutlined } from "@ant-design/icons"
import { Card, Image } from "antd"
import { TNews } from "../../types"
import { base64, dateTimes } from "../../helpers"
import { Link } from "react-router-dom"

const CardNews = ({ data }: { data: TNews }) => {
  const searchParams = (data: TNews): string => {
    const encodeData = base64(JSON.stringify(data)).encode()

    const params = {
      query: encodeData,
    }

    return new URLSearchParams(params).toString()
  }
  return (
    <Link to={{ pathname: "/detail", search: searchParams(data) }}>
      <Card
        bordered={false}
        hoverable
        cover={
          <Image
            preview={false}
            src={data.urlToImage}
            style={{ height: "200px", objectFit: "cover" }}
          />
        }
      >
        <Card.Meta
          title={data.title}
          description={
            <div className="flex">
              <div>
                <FieldTimeOutlined size={12} />
                <small className="ml-1">{dateTimes(data.publishedAt)}</small>
              </div>
            </div>
          }
        />
        <p className="multiline-truncate">{data.description}</p>
      </Card>
    </Link>
  )
}

export default CardNews
