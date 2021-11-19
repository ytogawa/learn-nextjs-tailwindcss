import { useFormContext, useFieldArray } from 'react-hook-form'
import TextInput from '../form/TextInput'

export default function InputExampleArray() {
  const { control } = useFormContext()
  const { fields, append } = useFieldArray({
    name: 'examples',
    control,
  })

  const onAdd = () => {
    append({}, { focusName: 'examples.0.value' })
  }

  return (
    <div className="m-0 p-0">
      {fields.map((_field, index) => (
        <div key={index} className="mb-1 flex">
          <div className="flex justify-center items-center w-10">
            <span>{index}</span>
          </div>
          <TextInput
            className="w-full"
            name={`examples.${index}.value`}
            registerOptions={{
              required: { value: true, message: 'Value is required.' },
            }}
          ></TextInput>
        </div>
      ))}
      <div className="flex justify-center mt-2">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={onAdd}
        >
          add example
        </button>
      </div>
    </div>
  )
}
