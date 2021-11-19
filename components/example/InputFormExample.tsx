import { SubmitHandler } from 'react-hook-form'
import Form from '../form/Form'
import TextInput from '../form/TextInput'
import InputExampleArray from './InputExampleArray'

type Example = {
  value?: string
}

type Inputs = {
  name: string
  email: string
  examples: Example[]
}

export default function InputFormExample() {
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }
  return (
    <Form onSubmit={onSubmit} className="w-full divide-y divide-rose-400">
      <div>
        <TextInput
          className="mb-4"
          name="name"
          label="Name"
          registerOptions={{
            required: { value: true, message: 'Name is required.' },
          }}
        ></TextInput>
        <TextInput
          className="mb-4"
          name="email"
          label="Email"
          registerOptions={{
            maxLength: { value: 320, message: 'Email max length is 5.' },
            pattern: { value: /^\S+@\S+$/i, message: 'Not email address.' },
          }}
        ></TextInput>
      </div>
      <div className="py-4">
        <InputExampleArray></InputExampleArray>
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          送信
        </button>
      </div>
    </Form>
  )
}
