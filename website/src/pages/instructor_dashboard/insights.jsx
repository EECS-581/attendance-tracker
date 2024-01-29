import React, { useEffect, useState } from 'react';
import Navbar from "@/components/navbar";
import BarChart from '@/components/bar_chart';
import Footer from "@/components/footer";
import { useGraphContext } from "@/contexts/graphContext";
import { useWeb3Context } from "@/contexts/web3Context";

export default function Insights() {
    const { userWallet } = useWeb3Context();
    const {
        queryAttendancePerClassForInstructor
    } = useGraphContext();

    const [classAttendanceData, setClassAttendanceData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (userWallet) {
                const attendanceData = await queryAttendancePerClassForInstructor(userWallet);
                setClassAttendanceData(attendanceData);
                console.log(attendanceData);
            }
        };

        fetchData();
        console.log("userWallet: ", userWallet);
    }, [userWallet]);

    return (
        <main className="w-full overflow-hidden">
            <div className="py-6">
                <div className="container mx-auto">
                    <Navbar />
                </div>
                <div className="max-w-4xl mx-auto p-6">
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center my-4">Instructor Dashboard</h1>
                    <h2 className="text-xl md:text-2xl text-gray-700 text-center my-4">Class Attendance Insights</h2>
                    {classAttendanceData.map((classData, index) => (
                        <div key={index} className="mt-6">
                            {console.log('Class Attendance Data:', classData)}
                            <h3 className="text-2xl font-semibold text-gray-800">{classData.className}</h3>
                            <BarChart 
                            
                                title={`Attendance for ${classData.className}`}
                                data={classData.sessions.map(session => ({
                                    name: session.sessionDate,
                                    attendance: session.sessionAttendance
                                }))}
                                xKey="name"
                                yKey="attendance"
                                xAxisLabel="Session Date"
                                yAxisLabel="Attendance"
                                chartHeight={300}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-4 text-center text-sm text-gray-600">
                <Footer />
            </div> 
        </main>
    );
}
