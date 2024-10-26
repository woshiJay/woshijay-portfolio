import Link from "next/link"
import ModeToggle from "@/components/ui/mode-toggle"
import Clock from "@/components/ui/clock"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-neutral-500 dark:bg-neutral-950">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <p className="font-mono font-bold">(我是)woshiJay</p>
        </Link>
        {/* <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Contact
          </Link>
        </nav> */}
        {/* Hidden Menu */}
        <div className="flex items-center gap-4">
          <Clock />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}