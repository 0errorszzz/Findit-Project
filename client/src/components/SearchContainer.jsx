import React from 'react'
import { FormRow, FormRowSelect, SubmitBtn } from '.';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../utils/constants';
import { useAllJobsContext } from '../pages/AllJobs';

const SearchContainer = () => {
  const {searchValues}=useAllJobsContext()
  const {search,jobStatus,jobType,sort,location}=searchValues
  const submit = useSubmit()

  const debounce = (onChange)=>{
    let timeout
    return (e)=>{
      const form = e.currentTarget.form
      clearTimeout(timeout)
      timeout=setTimeout(()=>{
        onChange(form)
      },2000)
    }
  }
  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>search form</h5>
        <div className='form-center'>
        <div className="form-row">
            <label htmlFor="search" className="form-label">
              Search (Job Title or Company)
            </label>
            <input
              type="search"
              id="search"
              name="search"
              defaultValue={search}
              className="form-input"
              onChange={debounce((form) => {
                submit(form);
              })}
            />
          </div>
          <FormRow
            type="text"
            name="location"
            labelText="Location"
            defaultValue={location}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          
          <FormRowSelect labelText='job status' 
                         name='jobStatus' 
                         list={['all',...Object.values(JOB_STATUS)]} 
                         defaultValue={jobStatus}
                         onChange={(e) => {
                          submit(e.currentTarget.form);
                        }}/>
          <FormRowSelect labelText='job type' 
                         name='jobType' 
                         list={['all',...Object.values(JOB_TYPE)]} 
                         defaultValue={jobType}
                         onChange={(e) => {
                          submit(e.currentTarget.form);
                        }}/>
          <FormRowSelect  
                         name='sort' 
                         list={[...Object.values(JOB_SORT_BY)]} 
                         defaultValue={sort}
                         onChange={(e) => {
                          submit(e.currentTarget.form);
                        }}/>
                         <Link to='/dashboard/all-jobs' className='btn form-btn delete-btn'>
                         Reset Search Values</Link>
          
        </div>
      </Form>
    </Wrapper>
  )
}

export default SearchContainer
