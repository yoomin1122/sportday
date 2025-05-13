import { Calendar } from "lucide-react"
import Navbar from "@/components/navbar"

export default function SchedulePage() {
  // 샘플 일정 데이터
  const schedules = [
    { id: 1, time: "09:00", teamA: "1학년", teamB: "미니게임", location: "팔아관" },
    { id: 2, time: "09:30", teamA: "2학년", teamB: "축구", location: "운동장장" },
    { id: 3, time: "10:00", teamA: "3학년", teamB: "3학년 5반", location: "메인 경기장" },
    { id: 4, time: "10:30", teamA: "1학년", teamB: "1학년 6반", location: "서브 경기장" },
    { id: 5, time: "11:00", teamA: "2학년", teamB: "2학년 4반", location: "메인 경기장" },
    { id: 6, time: "11:30", teamA: "3학년", teamB: "3학년 6반", location: "서브 경기장" },
    { id: 7, time: "13:00", teamA: "1학년", teamB: "1학년 7반", location: "메인 경기장" },
    { id: 8, time: "13:30", teamA: "2학년", teamB: "2학년 5반", location: "서브 경기장" },
    { id: 9, time: "14:00", teamA: "3학년", teamB: "3학년 4반", location: "메인 경기장" },
  ]

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Calendar className="h-6 w-6 mr-2 text-gray-700" />
          <h1 className="text-3xl font-bold">일정표</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="grid grid-cols-10 bg-gray-100 p-4 font-semibold text-gray-700">
            <div className="col-span-2">시간</div>
            <div className="col-span-5">경기</div>
            <div className="col-span-3">장소</div>
          </div>

          {schedules.map((schedule) => (
            <div key={schedule.id} className="grid grid-cols-10 p-4 border-b border-gray-200 hover:bg-gray-50">
              <div className="col-span-2 text-sm md:text-base">{schedule.time}</div>
              <div className="col-span-5">
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium">{schedule.teamA}</span>
                  <span className="mx-1 hidden md:inline"></span>
                  <span className="md:hidden"></span>
                  <span className="font-medium">{schedule.teamB}</span>
                </div>
              </div>
              <div className="col-span-3 text-gray-600">{schedule.location}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">일정 안내</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>모든 경기 일정은 변경될 수 있습니다.</li>
            <li>날씨 상황에 따라 일정이 조정될 수 있습니다.</li>
          </ul>
        </div>
      </main>
    </>
  )
}
