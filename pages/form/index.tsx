import type { NextPage } from 'next'
import InputFormExample from '../../components/example/InputFormExample'

const Form: NextPage = () => {
  return (
    <div className="container py-6 max-w-4xl">
      <h1 className="text-center text-4xl mb-4">Input Form Example</h1>
      <InputFormExample></InputFormExample>
    </div>
  )
}

export default Form
