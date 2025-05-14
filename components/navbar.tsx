"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 왼쪽 타이틀 */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              송악고 체육대회
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">메뉴 열기</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* 데스크톱 메뉴 - 중앙과 오른쪽 사이에 위치 */}
          <div className="hidden md:block ml-auto">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                  일정표
                </Link>
              </li>
              <li>
                <Link href="/matches" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                  대진표
                </Link>
              </li>
              <li>
                <Link href="/rankings" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                  순위
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden pb-3">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="/schedule"
                  className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  일정표
                </Link>
              </li>
              <li>
                <Link
                  href="/matches"
                  className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  대진표
                </Link>
              </li>
              <li>
                <Link
                  href="/rankings"
                  className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  순위
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
