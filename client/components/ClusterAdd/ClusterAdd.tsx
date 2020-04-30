import React from 'react';
import { Form } from "snowy/pro";

const { Field } = Form;

const ClusterAdd = (props) => {
  const { router } = props

  return (
    <Form
      // debug
      initialValues={{
        title: 'caicloud.rar',
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
      onCancel={() => {
        router.goBack()
      }}
    >
      <Field
        required
        label="名称"
        name="name"
        component="input"
        labelTooltip="这是名称"
        tips="支持中文和特殊符号，长度限制 2-32 个字符。"
      />
      <Field
        label="描述"
        name="description"
        component="textArea"
        labelTooltip="这是备注"
        placeholder="请输入备注"
      />
      <Field
        label="标题"
        name="title"
        component="input"
      />
      <Field
        label="标题"
        name="title2"
        component="input"
      />
      <Field
        label="标题"
        name="title3"
        component="input"
      />
    </Form>
  )
}

export default ClusterAdd
