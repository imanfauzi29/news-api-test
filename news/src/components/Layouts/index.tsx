import { Layout, Space } from "antd"
import { PropsWithChildren } from "react"
import layout from "./layout.module.css"

const Layouts = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <>
      <Space
        direction="vertical"
        className={`${layout.container} ${className}`}
        size={[0, 48]}
      >
        <Layout.Content className={layout.content}>{children}</Layout.Content>
      </Space>
    </>
  )
}

export default Layouts
