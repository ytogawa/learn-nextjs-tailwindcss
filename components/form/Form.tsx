import { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

type Props = {
  onSubmit: any
  className?: any | undefined
}
export default function Form({
  className,
  onSubmit,
  children,
}: PropsWithChildren<Props>) {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form
        className={className ?? ''}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  )
}
