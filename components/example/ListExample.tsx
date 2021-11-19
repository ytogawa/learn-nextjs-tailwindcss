import DataTable, { ExpanderComponentProps } from 'react-data-table-component'

type Example = {
  id: number
  name: string
  birthday: string
}

const columns = [
  {
    name: 'Name',
    selector: (row: Example) => row.name,
    sortable: true,
  },
  {
    name: 'Birthday',
    selector: (row: Example) => row.birthday,
    sortable: true,
  },
]

const data: Example[] = [
  { id: 1, name: '徳田 功児', birthday: '1982/05/03' },
  { id: 2, name: '飯田 信人', birthday: '1980/10/20' },
  { id: 3, name: '堀川 陽子', birthday: '1975/11/25' },
  { id: 4, name: '藤村 武久', birthday: '1993/09/06' },
  { id: 5, name: '三木 泰秀', birthday: '1975/06/10' },
  { id: 6, name: '柳田 れいや', birthday: '1984/02/13' },
  { id: 7, name: '山中 雅則', birthday: '1994/10/18' },
  { id: 8, name: '小川 邦煕', birthday: '1977/09/28' },
  { id: 9, name: '南 直幸', birthday: '1976/03/12' },
  { id: 10, name: '亀井 永寿', birthday: '1970/05/07' },
  { id: 11, name: '宮城 希和', birthday: '1977/09/22' },
  { id: 12, name: '畠山 善二', birthday: '1990/09/20' },
  { id: 13, name: '小野 勝司', birthday: '1973/10/06' },
  { id: 14, name: '丸山 勇美', birthday: '1980/07/01' },
  { id: 15, name: '白井 亀男', birthday: '1984/04/16' },
  { id: 16, name: '天野 正次', birthday: '1974/06/26' },
  { id: 17, name: '新田 道貴', birthday: '1976/01/24' },
  { id: 18, name: '石山 長一郎', birthday: '1975/02/03' },
  { id: 19, name: '山根 さやか', birthday: '1988/05/19' },
  { id: 20, name: '小柳 俊郎', birthday: '1970/01/05' },
  { id: 21, name: '川村 喜久郎', birthday: '1986/06/27' },
  { id: 22, name: '足立 孝彦', birthday: '1970/08/20' },
  { id: 23, name: '松野 明博', birthday: '1974/01/08' },
  { id: 24, name: '丹羽 隆次', birthday: '1990/12/22' },
  { id: 25, name: '田畑 顕太郎', birthday: '1989/02/25' },
  { id: 26, name: '松山 佐千雄', birthday: '1989/09/29' },
  { id: 27, name: '鶴田 史男', birthday: '1979/10/27' },
  { id: 28, name: '根本 芙美', birthday: '1985/07/28' },
  { id: 29, name: '村瀬 由水', birthday: '1987/10/11' },
  { id: 30, name: '遠藤 基', birthday: '1977/01/09' },
  { id: 31, name: '榊原 正進', birthday: '1983/02/18' },
  { id: 32, name: '本多 茂平', birthday: '1978/10/31' },
  { id: 33, name: '山内 玲子', birthday: '1980/10/12' },
  { id: 34, name: '浅田 角太郎', birthday: '1973/08/20' },
  { id: 35, name: '宮本 道正', birthday: '1993/08/08' },
  { id: 36, name: '秋田 茂也', birthday: '1993/02/28' },
  { id: 37, name: '福永 準郎', birthday: '1989/11/20' },
  { id: 38, name: '斉藤 永寿', birthday: '1988/10/11' },
  { id: 39, name: '藤井 水泉', birthday: '1979/12/31' },
  { id: 40, name: '沢田 芙美', birthday: '1983/01/03' },
  { id: 41, name: '長岡 和広', birthday: '1974/08/31' },
  { id: 42, name: '吉岡 忠助', birthday: '1971/07/15' },
  { id: 43, name: '村井 康司', birthday: '1970/03/18' },
  { id: 44, name: '三木 泳助', birthday: '1994/04/22' },
  { id: 45, name: '土屋 忠博', birthday: '1975/09/19' },
  { id: 46, name: '辻 次生', birthday: '1985/08/25' },
  { id: 47, name: '田中 健也', birthday: '1992/04/30' },
  { id: 48, name: '小野 完一', birthday: '1987/09/27' },
  { id: 49, name: '土屋 火呂絵', birthday: '1977/07/21' },
  { id: 50, name: '園田 宜昭', birthday: '1991/04/01' },
]

const ExpandedComponent = ({ data }: ExpanderComponentProps<Example>) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
)

export default function ListExample() {
  return (
    <DataTable
      pagination
      columns={columns}
      data={data}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
    />
  )
}
