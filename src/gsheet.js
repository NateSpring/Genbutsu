import { GoogleSpreadsheet } from 'google-spreadsheet';
import { useEffect, useState } from 'react';



export const Scheduler = (sheetID) => {
    const doc = new GoogleSpreadsheet('')
    const [sheetTitle, setSheetData] = useState();


    const getSheet = async (sheetID) => {
        try {
            await doc.useServiceAccountAuth({
                client_email: '',
                private_key:''
            })
            let now = new Date();
            let days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
            let day = days[now.getDay()];

            await doc.loadInfo();
            const sheet = doc.sheetsById[sheetID];
            const rows = await sheet.getRows();
            // console.log(rows[0]);
            await sheet.loadCells();
            let tasks = sheet.getCell(12, 12).value;
            let title = sheet.title;
            setSheetData(title)
            console.log(sheetTitle)

        } catch (e) {
            console.log('GSheet Error: ', e)
        }
    }


    useEffect(() => {
        getSheet(sheetID)
    })



    return (
        <div>
            <h1 className="page-title">{sheetTitle}</h1>
            <div className="app-container">
                <div className="dept-tile">
                    <h3>Cell 1</h3>
                </div>
                <div className="dept-tile">
                    <h3>Cell 2</h3>
                </div>
                <div className="dept-tile">
                    <h3>Cell 3</h3>
                </div>
            </div>
            <h3>Current Status</h3>
            {/* <div>
                    <button onClick={statusOnSchedule(2)}>On Schedule</button>
                    <button onClick={statusBehind(2)}>Behind</button>
                    <button onClick={statusWaiting(2)}>Waiting</button>
                    <button onClick={statusIdle(2)}>Idle</button>
                </div> */}
        </div>
    )


}
