import type { NextPage } from 'next'
import ListExample from '../../components/example/ListExample'

const List: NextPage = () => {
  return (
    <div className="container py-6 max-w-4xl">
      <h1 className="text-center text-4xl mb-4">List Example</h1>
      <ListExample></ListExample>
    </div>
  )
}

export default List
