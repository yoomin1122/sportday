import { Calendar } from "lucide-react"
import Navbar from "@/components/navbar"

export default function SchedulePage() {
  // 샘플 일정 데이터
  const schedules = [
    { id: 1, time: "08:00 - 08:30", teamA: "준비",  location: "각 반" },
    { id: 2, time: "08:30 - 09:00", teamA: "개회식", location: "운동장" },
    { id: 3, time: "09:00 - 10:00", teamA: "3학년 미션게임", location: "팔아관" },
    { id: 4, time: "09:00 - 09:30", teamA: "1학년 핸드볼", location: "농구장" },
    { id: 5, time: "09:00 - 09:30", teamA: "2학년 8자 줄넘기", location: "운동장" },
    { id: 6, time: "09:40 - 10:15", teamA: "1학년 축구", location: "운동장" },
    { id: 7, time: "10:20 - 11:20", teamA: "1학년 미션게임", location: "팔아관" },
    { id: 8, time: "10:20 - 10:50", teamA: "2학년 핸드볼", location: "농구장" },
    { id: 9, time: "10:20 - 10:50", teamA: "3학년 8자 줄넘기", location: "운동장" },
    { id: 10, time: "11:00 - 11:35", teamA: "2학년 축구", location: "운동장" },
    { id: 11, time: "11:50 - 12:50", teamA: "점심 및 댄스동아리 축하 무대", location: "급식실 및 운동장" },
    { id: 12, time: "12:50 - 13:50", teamA: "2학년 미션게임", location: "팔아관" },
    { id: 13, time: "12:50 - 13:25", teamA: "3학년 핸드볼", location: "농구장" },
    { id: 14, time: "12:50 - 13:25", teamA: "1학년 8자 줄넘기", location: "운동장" },
    { id: 15, time: "13:30 - 14:05", teamA: "3학년 축구", location: "운동장" },
    { id: 16, time: "14:20 - 14:50", teamA: "계주(혼성)", location: "운동장" },
    { id: 17, time: "15:00 - 15:20", teamA: "폐회식", location: "운동장" },
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
            <div className="col-span-5">종목</div>
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
