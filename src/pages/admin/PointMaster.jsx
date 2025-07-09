import React, { useState } from 'react'
import InputWithLabel from '../../comoponent/specific/form/InputWithLabel'
import Button from '../../comoponent/specific/form/Button';
import { errorToast, successToast } from '../../hooks/toast.hooks';
import PendualLoader from '../../comoponent/Loader/PendualLoader';
import { getPointMasterService, pointMasterAddService, updatePointsStatusService } from '../../service/admin/admin.service';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useMemo } from 'react';
import Toggle from '../../comoponent/shared/Toggle';

const PointMaster = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pointsData,setPointData]=useState([]);
  const [formData, setFormData] = useState({
    name: "",
    points: 0,
    points_type: "",
    description: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }
  function validateForm() {
    if (formData.name === '') {
      errorToast('Name is required');
      return;
    }
    if (formData.points === '') {
      errorToast('Points is required');
      return;
    }
    if (formData.points_type === '') {
      errorToast('Point type is required');
      return;
    }
    return;
  }
  async function handleSubmit() {
    validateForm();
    try {
      setIsLoading(true);
      let response = await pointMasterAddService(formData);
      setIsLoading(false);
      if (response.data != null && response.data.statusCode === 201) {
        setFormData({
          name: "",
          points: 0,
          points_type: "",
          description: ""
        })
        successToast(response.data.message);
      } else {
        errorToast(response.error.message || response.errors.message || response.data.message || response.error.message)
      }


    } catch (error) {
      setIsLoading(false);
      console.log('something went wrong while adding poiints master', error);
    }

  }
  async function handleToggle(pointId) {
       try {
      setIsLoading(true);
      let response=await updatePointsStatusService({points_master_id: pointId});
      setIsLoading(false);
      if(response.data != null && response.data.statusCode === 200) {
        successToast(response.data.message);
        // Reload the data after toggling status
        loadData();
      } else {
        errorToast(response.error.message || response.errors.message || response.data.message || response.error.message)
      }
       } catch (error) {
        setIsLoading(false);
        console.log('something went wrong while toggling point status', error);
       }
  }
  async function loadData() {
    try {
      setIsLoading(true);
      let response=await getPointMasterService();
      setIsLoading(false);
      if(response.data != null && response.data.statusCode === 200) {
        setPointData(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log('something went wrong while loading points master data', error);
    }
  }
  useMemo(()=>{
loadData()
  },[])

  return (
    <div className='ml-0 sm:ml-[16rem]  mt-20'>
      {
        isLoading && <PendualLoader />
      }
      <h3 className='text-center text-xl font-bold border-b-2 '>Points Master</h3>
      <div className='flex flex-col sm:flex-row justify-start items-end gap-2 my-2'>
        <InputWithLabel type='text' placeholder={'Enter Points Name'} value={formData.name} name={'name'} required={true} label={'Points Name'} handleChange={handleChange} />
        <div className='flex flex-col'>
          <label for="select_type">Points Type <span className='text-red-800 font-bold'>*</span></label>
          <select value={formData.points_type} name='points_type' onChange={handleChange} className='border shadow-md p-2 rounded-md outline-none'>
            <option value="" disabled selected>Select Points Type</option>
            <option value="welcome">welcome</option>
            <option value="per_booking">per_booking</option>
            <option value="cashback">cashback</option>
            <option value="referral">referral</option>
            <option value="welcome">welcome</option>
          </select>
        </div>
        <InputWithLabel type='number' placeholder={'Enter Points value'} value={formData.points} name={'points'} required={true} label={'Points in number'} handleChange={handleChange} />
        <InputWithLabel type='text' placeholder={'Enter Points description'} value={formData.description} name={'description'} required={true} label={'Description about points'} handleChange={handleChange} />
        <Button type='button' text='Submit' className={'p-2'} handlClick={handleSubmit} />
      </div>
      <h3 className='text-center text-xl font-bold border-b-2 '>Points Master Reports</h3>
 <div className='overflow-scroll'>


              <table className="min-w-full divide-y divide-gray-200 table-responsive">
                <thead className="bg-black ">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Point</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Created At</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Action</th>

                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                      pointsData.map((point, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{point.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{point.points_type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{point.points}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{point.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <Toggle isToggle={point.is_active} handleToggle={()=>handleToggle(point?._id)} />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(point.createdAt).toLocaleDateString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            {/* Add action buttons here if needed */}
                            <button className='bg-blue-600 text-white p-2 hover:bg-blue-900 rounded-sm'><FaEdit /> </button>
                            <button className='bg-red-600 text-white p-2 hover:bg-red-900 ml-2 rounded-sm'> <FaTrash /> </button>
                          </td>
                        </tr>
                      ))
                    }
                </tbody>
              </table>
            </div>
    </div>
  )
}

export default PointMaster