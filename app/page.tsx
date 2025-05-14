import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6">환영합니다</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            송악고등학교 체육대회 웹사이트
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">서비스 소개</h2>
            <p className="text-gray-600">해당 웹사이트는 송악고등학교 체육대회 일정 및 대진표를 한눈에 알려주는 웹 사이트 입니다.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">제작</h2>
            <p className="text-gray-600">3309 나유호</p>
          </div>
        </div>
      </div>
    </main>
  )
}
