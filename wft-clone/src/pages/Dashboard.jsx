import Card from "../components/Card"


export default function Dashboard() {
    const daysDate = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const lastPunch = {
        date: "Sun Jan 28",
        time: "8:07 PM"
    };
    const nextShift = {
        date: "Fri Feb 2",
        startTime: "11:30 AM",
        endTime: "8:00 PM",
        shiftLen: "8:00",
        role: "Millwork Associate",
    };
    const timeOff = {
        sickCan: "4:00",
        floatCan: "4:00",
        espc: "00:00"
    };
    const lastPunchComp = (<>
        <span className="leading-snug ps-6 pt-2 pb-9 inline-block font-medium w-[77px] text-wrap text-lg text-center">{lastPunch.date}</span>       <span className="text-lg pt-2 ps-6">Punch at {lastPunch.time}</span>
    </>);
    const nextShiftComp = (<>
        <span className="leading-snug ps-6 pt-2 pb-9 inline-block font-medium w-[77px] text-wrap text-lg text-center">{nextShift.date}</span>
        <span className="pt-2 ps-6 text-lg inline-block w-60 text-wrap">{`${nextShift.startTime} - ${nextShift.endTime} [${nextShift.shiftLen}] ${nextShift.role}`}</span>
    </>);
    const timeOffComp = (<div className="w-full h-full flex flex-col">

        <p className="w-full text-xl flex justify-between pb-2"> <span>SICK-CAN</span>                           <span>{timeOff.sickCan} hours</span> </p>
        <p className="w-full text-xl flex justify-between pb-2"> <span>FLOAT-CAN</span>                          <span>{timeOff.floatCan} hours</span> </p>
        <p className="w-full text-xl flex justify-between pb-5"> <span className="w-44">EMERGENCY SICK PERSONAL-CAN</span>        <span>{timeOff.espc} hours</span> </p>
    </div>);
    return (
        <div>
            <header className="p-9 h-[150px] object-cover shopping-carts">
                <h1 className="text-4xl font-light text-gray-200">{`${months[daysDate.getMonth()]} ${daysDate.getDate()}, ${daysDate.getFullYear()}`}</h1>
                <h2 className="text-2xl text-gray-200">Workforce Tools</h2>
            </header>
            

            <main>

                <Card className="" header="Last Punch" viewLink child={lastPunchComp}></Card>

                <Card header="Next Shift" viewLink child={nextShiftComp}></Card>

                <Card header="Time Off Balances" viewLink child={timeOffComp}></Card>

            </main>
        </div>
    )
}