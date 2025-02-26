"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Home,
  User,
  LayoutGrid,
  BookOpen,
  FileUser,
  Github,
  Linkedin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"

type NavItem = {
    href: string
    label?: string
    Icon: React.ComponentType<{ size?: number }>
    exact: boolean
}
  
const navItems: NavItem[] = [
  { href: "/", label: "", Icon: Home, exact: true },
  { href: "/about", label: "About me", Icon: User, exact: true },
  { href: "/work", label: "My Work", Icon: LayoutGrid, exact: false },
  { href: "/blog", label: "Education", Icon: BookOpen, exact: false },
  { href: "/resume.pdf", label: "Resume", Icon: FileUser, exact: false },
  { href: "https://www.linkedin.com/in/santiago-fonseca-ribes-91a998210/", Icon: Linkedin, exact: false },
  { href: "https://github.com/santiifr", Icon: Github, exact: false },
];

const display = {
  location: true,
  time: true,
}

const person = {
  location: "Europe/Madrid",
}

type TimeDisplayProps = {
  timeZone: string
  locale?: string
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "es-ES",
}) => {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }
      const timeString = new Intl.DateTimeFormat(locale, options).format(now)
      setCurrentTime(timeString)
    }

    updateTime()
    const intervalId = setInterval(updateTime, 1000)
    return () => clearInterval(intervalId)
  }, [timeZone, locale])

  return <span>{currentTime}</span>
}

export default TimeDisplay

function getLinkAttributes(href: string) {
  if (href.startsWith("http") || href.endsWith(".pdf")) {
    return { target: "_blank", rel: "noopener noreferrer" };
  }
  return {};
}

export function Header() {
  const pathname = usePathname() ?? ""

  return (
    <>
      {/* Fade overlays */}
      <div className="fixed top-0 left-0 w-full h-20 z-40 pointer-events-none bg-gradient-to-b from-black/70 to-transparent" />
      <div className="fixed bottom-0 left-0 w-full h-20 z-40 pointer-events-none bg-gradient-to-t from-black/70 to-transparent" />

      <header className="sticky top-0 z-50 w-full p-8">
        <div className="flex items-center justify-between">
          {/* Left: Location */}
          <div className="pl-12 text-sm">
            {display.location && (
              <div className="hidden sm:block">{person.location}</div>
            )}
          </div>

          {/* Center: Navigation */}
          <div className="flex-grow flex justify-center">
            <div className="flex items-center bg-surface dark:bg-surface rounded-md shadow-lg p-4">
              {navItems.map((item, index) => {
                const isActive = item.exact
                  ? pathname === item.href
                  : pathname.startsWith(item.href)
                return (
                  <div key={item.href} className="flex items-center">
                    <Link href={item.href} passHref {...getLinkAttributes(item.href)}>
                      <Button
                        variant={isActive ? "default" : "outline"}
                        size="sm"
                        className="flex items-center"
                      >
                        <item.Icon size={16} />
                        {item.label && <span className="hidden sm:flex ml-1">{item.label}</span>}
                      </Button>
                    </Link>
                    {index < navItems.length - 1 && (
                      <Separator orientation="vertical" className="h-6 mx-2" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Time display */}
          <div className="pr-12 text-sm flex items-center gap-5">
            {display.time && (
              <div className="hidden sm:block">
                <TimeDisplay timeZone={person.location} />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
