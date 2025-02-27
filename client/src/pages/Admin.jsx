import React from 'react'
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';

import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import { StatItem } from '../components/StatItem';

export const loader=async()=>{
  try {
    const response = await customFetch.get('/users/admin/app-stats')
    return response.data
  } catch (error) {
    toast.error('You are not authorized to this page')
    return redirect('/dashboard')
  }
}

const Admin = () => {
  const {users,jobs}=useLoaderData()
  return (
    <Wrapper>
      <StatItem title='current users' count={users} color="#f09d6a" bcg="#f7efd7" icon={<FaSuitcaseRolling/>}/>
      <StatItem title='total jobs' count={jobs} color="#674acb" bcg="#e0e8f9" icon={<FaCalendarCheck/>}/>
    </Wrapper>
  )
}

export default Admin
