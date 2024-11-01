import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; // Import chart.js untuk react-chartjs-2

// Data untuk diagram batang dan lini
const data = [
  { name: 'Apr 17', posts: 2, likes: 5000, comments: 100, videoViews: 80000, engagement: 3800 },
  { name: 'Apr 18', posts: 5, likes: 8000, comments: 200, videoViews: 150000, engagement: 5600 },
  { name: 'Apr 19', posts: 3, likes: 7000, comments: 150, videoViews: 120000, engagement: 4200 },
  { name: 'Apr 20', posts: 3, likes: 6000, comments: 140, videoViews: 190000, engagement: 5200 },
  { name: 'Apr 21', posts: 6, likes: 5000, comments: 160, videoViews: 120000, engagement: 3200 },
  { name: 'Apr 22', posts: 9, likes: 3000, comments: 150, videoViews: 170000, engagement: 1200 },
];

// Data untuk dropdown hashtags dan mentions
const hashtags = [
  { name: '#lunaenterprise', count: 11 },
  { name: '#lunamaya', count: 10 },
  { name: '#teamlunamaya', count: 3 },
  { name: '#TonerSejutaUmat', count: 2 },
  { name: '#indonesiasnexttopmodel', count: 2 },
  { name: '#BNI46', count: 12 },
  { name: '#BNI4dada', count: 1 },
  { name: '#BNI46adsd', count: 211 },
  { name: '#BNI46ada', count: 112 },
];

const mentions = [
  { name: '@vagueskin', count: 4 },
  { name: '@manscrow_gilang', count: 3 },
  { name: '@intm_nettv', count: 2 },
  { name: '@linneabeautybar_id', count: 2 },
  { name: '@andychunmakeup', count: 2 },
  { name: '@bniadsads', count: 2 },
  { name: '@bni4ads', count: 2 },
  { name: '@bni46asda', count: 2 },
  { name: '@bni46sada', count: 2 },
];

// Komponen SentimentChart dengan ukuran lebih kecil
const SentimentChart = ({ data }) => {
  const chartData = {
    labels: ['Neutral', 'Positive', 'Negative'],
    datasets: [{
      data: data,
      backgroundColor: ['#2ecc71', '#3498db', '#f1c40f'],
    }]
  };

  return (
    <div style={{ width: '400px', height: '400px' }}> {/* Mengatur ukuran chart */}
      <Doughnut data={chartData} />
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-green-500">sembrani</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Profile & Report Generation */}
        <div className="grid md:grid-cols-2 gap-4 bg-white shadow-md rounded-lg p-6 mt-6">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 w-24 h-24 rounded-full flex justify-center items-center">
              <span className="text-6xl text-white">👤</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">@Profile</h2>
              <p className="text-sm text-gray-500">7,439 Video Count | 5,500,000 Subscriber</p>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione aut.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-gray-700 mb-2">Generate your report</p>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full">MS. PowerPoint</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-full">MS. Excel</button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {/* Konten Kartu Statistik */}
          {[ 
            { label: 'Followers', value: '5,500,000' },
            { label: 'Est Reach', value: '385,000' },
            { label: 'Posts', value: '100' },
            { label: 'Engagement', value: '867,773' },
            { label: 'Avg Engagement', value: '8,677' },
            { label: 'Total Likes', value: '836,000' },
            { label: 'Total Comments', value: '31,773' },
            { label: 'Views', value: '40,415,626' }
          ].map((stat, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
              <p className="text-gray-600">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Daily Posts and Engagements Performance</h2>
          <p className="text-gray-600 mb-6">Discover how much engagement your page has gained daily.</p>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="posts" fill="#00C49F" />
              <Bar dataKey="likes" fill="#0088FE" />
              <Bar dataKey="comments" fill="#FFBB28" />
              <Bar dataKey="videoViews" fill="#FF8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Hashtags dan Mentions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold mb-4">Most Popular Hashtags</h3>
            <div className="relative">
              <select
                className="w-full p-2 bg-gray-100 rounded-lg"
                size="5"
                style={{ maxHeight: '150px', overflowY: 'auto' }}
              >
                {hashtags.map((hashtag, index) => (
                  <option key={index} value={hashtag.name}>
                    {hashtag.name} ({hashtag.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold mb-4">Most Popular Mentions</h3>
            <div className="relative">
              <select
                className="w-full p-2 bg-gray-100 rounded-lg"
                size="5"
                style={{ maxHeight: '150px', overflowY: 'auto' }}
              >
                {mentions.map((mention, index) => (
                  <option key={index} value={mention.name}>
                    {mention.name} ({mention.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Sentiment Chart Section */}
        <div className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center flex-col mt-10">
          <h3 className="text-lg font-bold mb-4">Sentiment Analysis</h3>
          <div className="flex flex-col items-center">
            <SentimentChart data={[10, 55, 35]} />
            <div className="flex space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                <span>Positive</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                <span>Neutral</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
                <span>Negative</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
 <div className="bg-white text-gray-800 py-8">
        <footer className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">About Matamaya</h5>
              <p className="text-gray-600">
                Kami adalah tool yang dapat mengukur data media sosial secara akurat, menemukan insight konsumen, dan menampilkannya dalam bentuk grafik sehingga mudah untuk dibaca. Kami dirancang untuk membantu Anda dalam membuat laporan dan mengembangkan strategi digital.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
              <p className="text-gray-600">
                Jl. Barito II No.7 Kramat Pela<br />
                Kec. Kebayoran Baru, Kota Jakarta Selatan,<br />
                Daerah Khusus Jakarta 12130
              </p>
              <p className="text-gray-600">Phone: (021) 7222 153</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-300 pt-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">&copy; 2024 Matamaya. All Rights Reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">X</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">YouTube</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">TikTok</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
