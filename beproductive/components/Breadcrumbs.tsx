'use client'

import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Fragment } from "react"
  

function Breadcrumbs() {
    const path = usePathname()
    const segments = path.split("/")

    return <Breadcrumb>
    <BreadcrumbList className="text-white">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
   
        {segments.map((segment, index) => {
            if (!segment || index === 1) return null

            const href = `/${segments.slice(0, index + 1).join("/")}`
            const isLast = index === segments.length - 1

            return (
                <Fragment key={segment}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    {isLast ? (
                        <BreadcrumbPage className="text-white">{segment}</BreadcrumbPage>
                    ) : (
                        <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                    )}
                    </BreadcrumbItem>
                </Fragment>
            )
        })}
    </BreadcrumbList>
  </Breadcrumb>
}

export default Breadcrumbs