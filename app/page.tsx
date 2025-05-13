import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6">환영합니다</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            이곳은 당신의 메인 페이지입니다. 깔끔하고 심플한 디자인으로 사용자 경험을 향상시켜 보세요.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">서비스 소개</h2>
            <p className="text-gray-600">저희 서비스에 대한 간략한 소개와 주요 기능을 확인하세요.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">최신 소식</h2>
            <p className="text-gray-600">최신 업데이트와 새로운 기능에 대한 정보를 확인하세요.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">문의하기</h2>
            <p className="text-gray-600">질문이나 제안이 있으시면 언제든지 문의해 주세요.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
