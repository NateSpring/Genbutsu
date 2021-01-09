import { GoogleSpreadsheet } from 'google-spreadsheet';
import { useEffect, useState } from 'react';



export const Scheduler = (sheetID) => {
    const doc = new GoogleSpreadsheet('1-WMquhi1LqPfJW1_TwBjAfWAb0aB_PcXr__rzboQ0ko')
    const [sheetTitle, setSheetData] = useState();


    const getSheet = async (sheetID) => {
        try {
            await doc.useServiceAccountAuth({
                client_email: 'genbutsu@itd-scheduler-genbutsu.iam.gserviceaccount.com',
                private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDtaA4GlJvmgreo\nqHcGBIpSY0I3MFIku6pHHNBwKUeDwAbz98fL6N6bZSSW6mhrs6FYp1DlVsozGYZ7\n7XDW9oWNaGmsj83O7D1DoS+t2TBmS37anl5TiFFdPdmS3QcJNDX+YUKp+v+/Les9\nfYG2xsngUXTjtnCKjm2GKJB6RWghnZ1MqJmiOHRnjGm7uFNuMJ0Ys5RNP0A/sXxB\nYU8WCS1Igsadcx6FMbVpT6Ri/xH99iWjh7hRk4r0LtRNCzVk1w7VJ/xoyVy61XET\nGLkbmsbYpFpRE51eNmj6/3CA+EzHN159orwH6VMHFHTiSWzkUwOFIQ6TRuo09umA\nbRKIhvFhAgMBAAECggEAcPH/MjxDS1BHJhM3xQIl+HpGh1ES020A3qIjvCi3YEPc\nSvdH84fPWCivVqkgkpS8HxxCzUkUG2l6ZL0a4PoZoaPaGoGzzUzw/JrTvybD8vbZ\n3BJaF+2ToAOL3mYPMd7IDUSiXZIPWBn1f6SVMKq0Ymb+cFNciV6nVps32SPqHYsf\nNfqR7DZV4r3hH2BR91m4Y/d1L4DUtkzXhFKivgWNsR8B2bfaj9C4agAjHVfvgpsq\nh4lsDMSXJE5LW9opHmmmTbc4LSu9TQ1vHs9H6HoQ2bU8l+a1uBeiBijmiWpaxLtP\nUaydPlyNoqgQpt3UjD1lt6wTRfeQqiAFBwdMj6LKXQKBgQD4CGmKH14rWizZZQRc\nf1zTgmewjo4KON4KmUQX+3R2ZoEHDk+YqVsvW0/BxJ/ycidiD+TTwb81QHbX/IXk\nIDvj/ON3j3ixy6meLT+c4x0Opwb36zjwUKrQOOYWdM228z9y34ix3rl4Qis6qFh+\nhsScJDhHeinVzMAbAgzYuBhgywKBgQD1CELWmtmtTb8rd/w/lV/yCQy/mhbIhSRv\ndHOQ8H2cqSJUEUeyXPsmRX/By/Tra6H9ew3S1V5QyOHWi1iJanvYlmOnlcAVGYg5\noKdSuZh7yjWGe4k6uri2mwqkB/i6iYFf4W38cOq4i6LPcoRM/h/QmxEqmC7ZwLHX\njs1/IQqNAwKBgH/xZu+Wyq62L1hcoWlNUYbRR8dtYZuoRfFVqihsz2Cb84a+PRTU\nl3LQOU4MrS0U8XfGFxWcZZOEk0lKu443im1Kb9OmsG2WTwKG+L9m8AA07IVKUu6z\nzcjm8Nk4mzz6MQqCgDKwXx/HkiEJ4cwynIymqllEjPv6SEYmQpYwMHMNAoGBAPAU\nDAjg5+6ZgnlAsnJKFRu8KjWA8Fm/uhdJ7gFQ4IIiZXQhCjKET78L0UU8ZNhVOP53\nFvBABoz4he4D0dex8W4gy7tjSjRiM8ri0Y6IMhL36MG/QJG+aUThW+ejt9xs5cnf\nwjfZGuF+TyMafO5C/0EQ7hzhxuWrm5QsYsPwx7mpAoGADaEahAECtypfwBLsuInM\nS1ZdFJOUDi8yfm3FGamKlCjVPns6QQOMpdmQ+tnFCFXz0ygR1lr6b2sd30ioN8g2\nZQiweFYg10opBIHNTYhKnfzTQWZYIFAvGCEBDSORLZN1SpDn3XW9lYSmQjyQ1tVj\n7D1ZETPicne1lXvlfIylDyQ=\n-----END PRIVATE KEY-----\n'
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