import React, { useEffect, useState } from 'react';
import Navbar from "@/components/navbar";
import BarChart from '@/components/bar_chart';
import LineChart from '@/components/line_chart';
import ProgressChart from "@/components/progress_chart";
import Footer from "@/components/footer";
import { useGraphContext } from "@/contexts/graphContext";
import { useWeb3Context } from "@/contexts/web3Context";

export default function Insights() {
    const { userWallet } = useWeb3Context();
    const {
        queryAttendancePerClassForInstructor,
        queryAttendanceTrendsForInstructor,
        queryOverallStudentAttendanceForInstructor
    } = useGraphContext();

    const [classAttendance, setClassAttendance] = useState([]);
    const [attendanceTrends, setAttendanceTrends] = useState([]);
    const [overallAttendance, setOverallAttendance] = useState([]);

    useEffect(() => {
        if(userWallet) {
            queryAttendancePerClassForInstructor(userWallet).then(data => {
                setClassAttendance(data);
            });
            queryAttendanceTrendsForInstructor(userWallet).then(data => {
                setAttendanceTrends(data);
            });
            queryOverallStudentAttendanceForInstructor(userWallet).then(data => {
                setOverallAttendance(data);
            });
        }
    }, [userWallet]);

    return (
        <main className="w-full overflow-hidden">
            <div className="py-6">
                <div className="container mx-auto">
                    <Navbar />
                </div>
                <div className="max-w-4xl mx-auto p-6">
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center my-4">Instructor Dashboard</h1>
                    <h2 className="text-xl md:text-2xl text-gray-700 text-center my-4">Insights</h2>
                    <div className="mt-6">
                        <BarChart 
                            title="Attendance Per Class"
                            data={classAttendance}
                            xKey="name"
                            yKey="attendance"
                            xAxisLabel="Class"
                            yAxisLabel="Attendance"
                            chartHeight={300}
                        />
                    </div>   
                    <div>
                        <LineChart 
                            title="Attendance Trends"
                            data={attendanceTrends}
                            xKey="date"
                            yKey="attendance"
                            xAxisLabel="Date"
                            yAxisLabel="Attendance"
                            chartHeight={250}
                        />
                    </div>
                    <div>
                        <ProgressChart
                            title="Student attendance overall"
                            data={overallAttendance}
                            chartHeight={300}
                            chartWidth={300}
                            labelStyle={{ 
                                fontSize: 18,
                                fill: "black",
                                fontWeight: "bold"
                            }}
                            animationData={{y: 75 }}
                            colors={["powderblue", "pink"]}
                        />
                    </div>
                </div>
            </div>
            <div className="py-4 text-center text-sm text-gray-600">
                <Footer />
            </div> 
        </main>
    );
}
