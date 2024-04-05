"use client"

import Link from "next/link"
import { FC } from "react"
import { DSRILogoSVG } from "../icons/dsri-logo-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://ul.org/research/digital-safety"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <DSRILogoSVG theme={theme === "dark" ? "dark" : "light"} scale={1} />
      </div>

    </Link>
  )
}
