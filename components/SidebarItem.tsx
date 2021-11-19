import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'

type SideBarItemProps = {
  href: string | UrlObject
}

export default function SideBarItem({
  href,
  children,
}: PropsWithChildren<SideBarItemProps>) {
  return (
    <Link href={href}>
      <a className="flex items-center w-full p-3 hover:bg-indigo-500">
        {children}
      </a>
    </Link>
  )
}
