import './Main.css';
import {useState} from 'react';
import Data from './P2VO.json';
import { Bar,Line } from 'react-chartjs-2';

function Main() {
    const [date,setDate] = useState("");
    const [chkdate,setchkDate] = useState("");
    var achedule = [];
    var schdate = [],datecount = [],phasecount = [0,0,0,0,0];

    return (
        <div className="main">
            <label>Input Date :</label>
            <input type="date" onChange={(e)=>setDate(e.target.value)}/><br/>
            
            {date}
            {Data.length}
             {Data.map( sch => {
                 if(date===sch.item_date) { 
                     achedule.push(sch.schedule_time);                     
                    return (
                        <>
                        <br/>                        
                        <span style={{padding:" 0 2rem"}}>
                        <label >&nbsp;Schedule Date/Time : </label>
                        {sch.schedule_time}&nbsp;
                        </span>
                        <span style={{padding:" 0 2rem"}}>
                        <label>&nbsp; Schedule Slot : </label>
                        {sch.slot}&nbsp;
                        </span></>
                    )
                 }                     
    })
    }
                        {achedule.map( time => {
                            if(schdate.indexOf(time.split(" ")[0])===-1) {
                                schdate.push(time.split(" ")[0]);
                                datecount[schdate.indexOf(time.split(" ")[0])]=1;
                                return (<button onClick={()=>setchkDate(time.split(" ")[0])}>{time.split(" ")[0]}</button>);
                            }
                            else {
                                datecount[schdate.indexOf(time.split(" ")[0])]+=1;
                            }
                        })
                    }

{achedule.map( time => {
            if(time.split(" ")[0]===chkdate) {
                if(time.split(" ")[1]>='09:00:00' && time.split(" ")[1]<'12:00:00')
                    phasecount[0]++;
                 else if(time.split(" ")[1]>='12:00:00' && time.split(" ")[1]<'15:00:00')
                    phasecount[1]++;
                 else if(time.split(" ")[1]>='15:00:00' && time.split(" ")[1]<'18:00:00')
                    phasecount[2]++;
                 else if(time.split(" ")[1]>='09:00:00' && time.split(" ")[1]<'12:00:00')
                    phasecount[3]++;
                 else 
                    phasecount[4]++;
            }
         })
     }

                        <ar 
                         data ={{
                            labels : ['red','blue','green'],
                            datasets : [

                            ]
                        }}            
                        height = {100}
                        width ={100}
                        options={{
                            maintainAspectRatio: false,
                        }}
                        />
                        <Line
  datasetIdKey='id'
  data={{
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],
  }}
/>
                       <br/><br/>{achedule.indexOf('2021-11-20 10:51:04')}<br/>
                       <br/>{achedule}<br/>
                       {schdate}<br/>{datecount}<br/>{phasecount}
                       <br/>
                       {chkdate}

        </div>
    );
}
export default Main;
