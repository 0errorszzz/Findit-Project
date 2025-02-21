import React from 'react'
import { FaSuitcaseRolling, FaCalendarCheck, FaCloudsmith, FaCalendarTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';

const StatsContainer = ({defaultStats}) => {
    const stats=[
        {title:'pending applications',
         count:defaultStats?.pending || 5,
         icon:<FaCloudsmith/>,
         color:'#f59e0b',
         bcg:'#fef3c7'
        },
        {title:'interviews scheduled',
            count:defaultStats?.interview || 2,
            icon:<FaCalendarCheck/>,
            color:'#647acb',
            bcg:'#e0e8f9'
           },
           {title:'jobs declined',
            count:defaultStats?.declined || 1,
            icon:<FaCalendarTimes/>,
            color:'#d66a6a',
            bcg:'#ffeeee'
           }
    ]
    
  return (
    <Wrapper>
      {stats.map((item)=>{
        return (
            <StatItem key ={item.title} {...item}/>
        )
      })}
    </Wrapper>
  )
}

export default StatsContainer
