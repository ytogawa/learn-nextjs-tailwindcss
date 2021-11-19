import { useFormContext, RegisterOptions, get } from 'react-hook-form'

type TextInputProps = {
  name: string
  label?: string | undefined
  placeholder?: string | undefined
  className?: string | undefined
  registerOptions?: RegisterOptions | undefined
}

export default function TextInput({
  name,
  label,
  placeholder,
  className,
  registerOptions,
}: TextInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className={className ?? 'm-0 p-0'}>
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        placeholder={placeholder}
        {...register(name, registerOptions)}
      ></input>
      {get(errors, name) && (
        <div className="text-red-500 text-xs italic">
          <span className="block sm:inline">{get(errors, name).message}</span>
        </div>
      )}
    </div>
  )
}
