"use client"

import { useState } from "react"
import { Trophy } from "lucide-react"
import Navbar from "@/components/navbar"

export default function MatchesPage() {
  const [activeGrade, setActiveGrade] = useState<number>(1)
  const [activeSport, setActiveSport] = useState<string>("축구")

  // 종목 목록
  const sports = ["축구", "핸드볼", "줄넘기"]

  // 1학년 축구 대진표 데이터
  const grade1SoccerData = [
    {
      name: "8강",
      matches: [
        { id: 1, teamA: "1학년 3반", teamB: "1학년 5반", scoreA: "Win", scoreB: "Lose" },
        { id: 2, teamA: "1학년 2반", teamB: "1학년 7반", scoreA: "Lose", scoreB: "Win" },
        { id: 3, teamA: "1학년 6반", teamB: "1학년 8반", scoreA: "Win", scoreB: "Lose" },
        { id: 4, teamA: "1학년 1반", teamB: "1학년 4반", scoreA: "win", scoreB: "Lose" },
      ],
    },
    {
      name: "4강",
      matches: [
        { id: 5, teamA: "1학년 3반", teamB: "1학년 7반", scoreA: "Win", scoreB: "Lose" },
        { id: 6, teamA: "1학년 6반", teamB: "1학년 1반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "결승",
      matches: [{ id: 7, teamA: "1학년 7반", teamB: "1학년 1반", scoreA: null, scoreB: null }],
    },
  ]

  // 1학년 핸드볼 대진표 데이터
  const grade1HandballData = [
    {
      name: "8강",
      matches: [
        { id: 1, teamA: "1학년 7반", teamB: "1학년 3반", scoreA: "Lose", scoreB: "Win" },
        { id: 2, teamA: "1학년 5반", teamB: "1학년 1반", scoreA: "Win", scoreB: "Lose" },
        { id: 3, teamA: "1학년 4반", teamB: "1학년 8반", scoreA: "Win", scoreB: "Lose" },
        { id: 4, teamA: "1학년 6반", teamB: "1학년 2반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "4강",
      matches: [
        { id: 5, teamA: "1학년 5반", teamB: "1학년 3반", scoreA: "Win", scoreB: "Lose" },
        { id: 6, teamA: "1학년 2반", teamB: "1학년 4반", scoreA: "Win", scoreB: "Lose" },
      ],
    },
    {
      name: "결승",
      matches: [{ id: 7, teamA: "1학년 5반", teamB: "1학년 2반", scoreA: null, scoreB: null }],
    },
  ]

  // 1학년 줄넘기 대진표 데이터
  const grade1JumpRopeData = [
    {
      name: "8강",
      matches: [
        { id: 1, teamA: "1학년 7반", teamB: "1학년 8반", scoreA: "Win", scoreB: "Lose" },
        { id: 2, teamA: "1학년 2반", teamB: "1학년 1반", scoreA: "Win", scoreB: "Lose" },
        { id: 3, teamA: "1학년 6반", teamB: "1학년 4반", scoreA: "Win", scoreB: "Lose" },
        { id: 4, teamA: "1학년 3반", teamB: "1학년 5반", scoreA: "Win", scoreB: "Lose" },
      ],
    },
    {
      name: "4강",
      matches: [
        { id: 5, teamA: "1학년 7반", teamB: "1학년 2반", scoreA: "Lose", scoreB: "Win" },
        { id: 6, teamA: "1학년 6반", teamB: "1학년 3반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "결승",
      matches: [{ id: 7, teamA: "1학년 2반", teamB: "1학년 3반", scoreA: null, scoreB: null }],
    },
  ]

  // 2학년 축구 대진표 데이터
  const grade2SoccerData = [
    {
      name: "8강",
      matches: [
        { id: 1, teamA: "2학년 3반", teamB: "2학년 2반", scoreA: "Lose", scoreB: "Win" },
        { id: 2, teamA: "2학년 1반", teamB: "2학년 6반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "4강",
      matches: [
        { id: 1, teamA: "2학년 2반", teamB: "2학년 4반", scoreA: "Win", scoreB: "Lose" },
        { id: 2, teamA: "2학년 6반", teamB: "2학년 5반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "결승",
      matches: [{ id: 3, teamA: "2학년 4반", teamB: "2학년 5반", scoreA: null, scoreB: null }],
    },
  ]

  // 2학년 핸드볼 대진표 데이터
  const grade2HandballData = [
    {
      name: "8강",
      matches: [
        { id: 1, teamA: "2학년 5반", teamB: "2학년 2반", scoreA: "Lose", scoreB: "Win" },
        { id: 2, teamA: "2학년 1반", teamB: "2학년 3반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "4강",
      matches: [
        { id: 1, teamA: "2학년 2반", teamB: "2학년 6반", scoreA: "Win", scoreB: "Lose" },
        { id: 2, teamA: "2학년 3반", teamB: "2학년 4반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "결승",
      matches: [{ id: 3, teamA: "2학년 2반", teamB: "2학년 4반", scoreA: null, scoreB: null }],
    },
  ]

  // 2학년 줄넘기 대진표 데이터
  const grade2JumpRopeData = [
    {
      name: "8강",
      matches: [
        { id: 1, teamA: "2학년 3반", teamB: "2학년 2반", scoreA: "Win", scoreB: "Lose" },
        { id: 2, teamA: "2학년 1반", teamB: "2학년 4반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "4강",
      matches: [
        { id: 1, teamA: "2학년 3반", teamB: "2학년 6반", scoreA: "Win", scoreB: "Lose" },
        { id: 2, teamA: "2학년 4반", teamB: "2학년 5반", scoreA: "Win", scoreB: "Lose" },
      ],
    },
    {
      name: "결승",
      matches: [{ id: 3, teamA: "2학년 3반", teamB: "2학년 4반", scoreA: null, scoreB: null }],
    },
  ]

  // 3학년 축구 대진표 데이터
  const grade3SoccerData = [
    {
      name: "8강",
      matches: [
        { id: 1, teamA: "3학년 5반", teamB: "3학년 6반", scoreA: "Lose", scoreB: "Win" },
        { id: 2, teamA: "3학년 4반", teamB: "3학년 2반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "4강",
      matches: [
        { id: 1, teamA: "3학년 6반", teamB: "3학년 1반", scoreA: "Lose", scoreB: "Win" },
        { id: 2, teamA: "3학년 2반", teamB: "3학년 3반", scoreA: "Win", scoreB: "Lose" },
      ],
    },
    {
      name: "결승",
      matches: [{ id: 3, teamA: "3학년 1반", teamB: "3학년 2반", scoreA: null, scoreB: null }],
    },
  ]

  // 3학년 핸드볼 대진표 데이터
  const grade3HandballData = [
    {
      name: "8강",
      matches: [
        { id: 1, teamA: "3학년 6반", teamB: "3학년 4반", scoreA: "Lose", scoreB: "Win" },
        { id: 2, teamA: "3학년 2반", teamB: "3학년 1반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "4강",
      matches: [
        { id: 1, teamA: "3학년 4반", teamB: "3학년 3반", scoreA: "Win", scoreB: "Lose" },
        { id: 2, teamA: "3학년 1반", teamB: "3학년 5반", scoreA: "Win", scoreB: "Lose" },
      ],
    },
    {
      name: "결승",
      matches: [{ id: 3, teamA: "3학년 4반", teamB: "3학년 1반", scoreA: null, scoreB: null }],
    },
  ]

  // 3학년 줄넘기 대진표 데이터
  const grade3JumpRopeData = [
    {
      name: "8강",
      matches: [
        { id: 1, teamA: "3학년 2반", teamB: "3학년 3반", scoreA: "Lose", scoreB: "Win" },
        { id: 2, teamA: "3학년 6반", teamB: "3학년 4반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "4강",
      matches: [
        { id: 1, teamA: "3학년 3반", teamB: "3학년 5반", scoreA: "Win", scoreB: "Lose" },
        { id: 2, teamA: "3학년 4반", teamB: "3학년 1반", scoreA: "Lose", scoreB: "Win" },
      ],
    },
    {
      name: "결승",
      matches: [{ id: 3, teamA: "3학년 3반", teamB: "3학년 1반", scoreA: null, scoreB: null }],
    },
  ]

  // 현재 선택된 학년과 종목에 따라 대진표 데이터 선택
  const getTournamentData = () => {
    if (activeGrade === 1) {
      if (activeSport === "축구") return grade1SoccerData
      if (activeSport === "핸드볼") return grade1HandballData
      return grade1JumpRopeData
    } else if (activeGrade === 2) {
      if (activeSport === "축구") return grade2SoccerData
      if (activeSport === "핸드볼") return grade2HandballData
      return grade2JumpRopeData
    } else {
      if (activeSport === "축구") return grade3SoccerData
      if (activeSport === "핸드볼") return grade3HandballData
      return grade3JumpRopeData
    }
  }

  const tournamentData = getTournamentData()

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Trophy className="h-6 w-6 mr-2 text-gray-700" />
          <h1 className="text-3xl font-bold">대진표</h1>
        </div>

        {/* 학년 선택 탭 */}
        <div className="flex mb-4 border-b">
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

        {/* 종목 선택 탭 */}
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          {sports.map((sport) => (
            <button
              key={sport}
              className={`py-2 px-4 rounded-md font-medium flex-1 ${
                activeSport === sport
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() => setActiveSport(sport)}
            >
              {sport}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">
            {activeGrade}학년 {activeSport} 대진표
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-4">
            {tournamentData.map((round, index) => (
              <div key={index} className="flex-1">
                <div className="text-center bg-gray-100 py-2 rounded-t-lg font-medium">{round.name}</div>
                <div className="space-y-4 mt-4">
                  {round.matches.map((match) => (
                    <div key={match.id} className="border rounded-lg p-3 bg-white shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-medium">{match.teamA}</div>
                        <div className="text-lg font-bold">{match.scoreA !== null ? match.scoreA : "-"}</div>
                      </div>
                      <div className="border-t my-2"></div>
                      <div className="flex justify-between items-center">
                        <div className="font-medium">{match.teamB}</div>
                        <div className="text-lg font-bold">{match.scoreB !== null ? match.scoreB : "-"}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1  gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">대진표 규칙</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>모든 경기는 단판 승부로 진행됩니다. </li>
              <li>각 종목별 우승자는 학년 종합 순위에 반영됩니다. </li>
              <li>모든 학년은 축구, 핸드볼, 줄넘기, 미니게임, 계주 종목에 참가합니다. </li>
              <li>미니게임, 계주 종목은 대진표가 따로 없으며, 순위에 따라 학년 종합 순위에 반영됩니다. </li>
              <li>1학년은 총 8개 반, 2학년과 3학년은 총 6개 반이 참가합니다. </li>
          </ul>
        </div>
        </div>
      </main>
    </>
  )
}
