"use client"

import { useState } from "react"
import { Medal, TrendingUp } from "lucide-react"
import Navbar from "@/components/navbar"

export default function RankingsPage() {
  const [activeGrade, setActiveGrade] = useState<number>(1)

  // 1학년 순위 데이터 (1, 2등만)
  const grade1Rankings = [
    { rank: 1, team: "1학년 1반", points: 100 },
    { rank: 2, team: "1학년 2반", points: 95 },
  ]

  // 2학년 순위 데이터 (1, 2등만)
  const grade2Rankings = [
    { rank: 1, team: "2학년 3반", points: 100 },
    { rank: 2, team: "2학년 1반", points: 95 },
  ]

  // 3학년 순위 데이터 (1, 2등만)
  const grade3Rankings = [
    { rank: 1, team: "3학년 2반", points: 100 },
    { rank: 2, team: "3학년 5반", points: 95 },
  ]

  // 현재 선택된 학년에 대한 순위 데이터
  const getRankings = () => {
    if (activeGrade === 1) return grade1Rankings
    if (activeGrade === 2) return grade2Rankings
    return grade3Rankings
  }

  const rankings = getRankings()

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <TrendingUp className="h-6 w-6 mr-2 text-gray-700" />
          <h1 className="text-3xl font-bold">순위표</h1>
        </div>

        {/* 학년 선택 탭 */}
        <div className="flex mb-6 border-b">
          {[1, 2, 3].map((grade) => (
            <button
              key={grade}
              className={`py-2 px-4 font-medium ${
                activeGrade === grade ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveGrade(grade)}
            >
              {grade}학년
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-4 bg-gray-50 border-b">
            <h2 className="text-xl font-semibold">{activeGrade}학년 종합 순위</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    순위
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    반
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    종합 점수
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rankings.map((team) => (
                  <tr key={team.rank} className={team.rank <= 2 ? "bg-gray-50" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Medal className={`h-5 w-5 mr-2 ${team.rank === 1 ? "text-yellow-500" : "text-gray-400"}`} />
                        <div className="text-lg font-medium text-gray-900">{team.rank}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-lg font-medium text-gray-900">{team.team}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-lg text-center font-bold text-gray-900">
                      {team.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">순위 산정 방식</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>각 종목별 순위에 따라 점수가 부여됩니다.</li>
            <li>모든 종목(축구, 핸드볼, 줄넘기, 미니게임, 계주)의 점수를 합산하여 종합 순위가 결정됩니다.</li>
          </ul>
        </div>
      </main>
    </>
  )
}
