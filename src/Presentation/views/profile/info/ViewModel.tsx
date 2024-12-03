import React from 'react'
import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';

const ProfileInfoViewModel = () => {

    const removeSession = async() =>{
        await RemoveUserLocalUseCase();
    }

  return {
    removeSession
  }
}

export default ProfileInfoViewModel;