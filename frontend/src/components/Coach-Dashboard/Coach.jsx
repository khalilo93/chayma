import React from 'react';
import Sidebar from './SideBar';
import ProfileSection from './ProfileSection';
import CoursesList from './CourseList';

function CoachDashboard() {
  const courses = [
    { id: 1, title: 'cours 1 ' ,  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9r7FgcAIhkAPhxcwErcVGubGcqsbg1rd5NYxgbIMBkw2wWM1HVDaVLJFuQvOzrryevbc&usqp=CAU'  },
    { id: 2, title: 'cours 2 ' ,  imageUrl: 'https://media.istockphoto.com/id/517486990/photo/the-group-of-modern-ballet-dancers.jpg?s=612x612&w=0&k=20&c=TUryi44jtdJuXROqIy0PZ_N71B-dztHZk2OMKErU9ls=' },
    { id: 3, title: 'cours 3' ,  imageUrl: 'https://media.istockphoto.com/id/1091826308/photo/diverse-young-students-practicing-musical-theatre-dance-in-studio.jpg?s=612x612&w=0&k=20&c=nEUodiaF5ARwoOswxgec2cxBR71BFcmmyVRfQ_TDQpw='},
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <ProfileSection />
        <h2 className="text-2xl font-bold mt-4">My Courses</h2>
        <CoursesList courses={courses} />
      </div>
    </div>
  );
}

export default CoachDashboard;
