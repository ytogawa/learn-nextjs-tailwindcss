import SideBarItem from './SidebarItem'

export default function SideBar() {
  return (
    <div className="text-gray-200 bg-gray-800 w-64 content-between">
      <SideBarItem href="/">Top</SideBarItem>
      <SideBarItem href="/form">Form</SideBarItem>
      <SideBarItem href="/list">List</SideBarItem>
    </div>
  )
}
