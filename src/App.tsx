import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Drawer } from './components/Navigation/Drawer';

// Placeholder components for routes
const Home = () => (
  <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Course Introduction</h1>
      <p className="text-xl text-gray-600">Begin your learning journey with us.</p>
    </div>
  </div>
);

const PreCourseLecture = ({ number }: { number: number }) => (
  <div className="p-8">
    <h1 className="text-2xl">Pre-Course Lecture {number}</h1>
  </div>
);

const FirstLevel = () => <div className="p-8"><h1 className="text-2xl">First-Level Course</h1></div>;
const Story = () => <div className="p-8"><h1 className="text-2xl">Our Story</h1></div>;
const Team = () => <div className="p-8"><h1 className="text-2xl">Our Team</h1></div>;
const Mission = () => <div className="p-8"><h1 className="text-2xl">Our Mission</h1></div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Drawer />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pre-course/lecture-1" element={<PreCourseLecture number={1} />} />
            <Route path="/pre-course/lecture-2" element={<PreCourseLecture number={2} />} />
            <Route path="/pre-course/lecture-3" element={<PreCourseLecture number={3} />} />
            <Route path="/first-level" element={<FirstLevel />} />
            <Route path="/about/story" element={<Story />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/mission" element={<Mission />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;