import React ,{useRef,useState} from 'react'
import {LuUser,LuUpload,LuTrash} from "react-icons/lu"

const ProfilePhotoSelector = ({image,setImage}) => {

    const inputRef=useRef(null)
    const [previewURL, setPreviewURL] =useState(null)

    const handleImageChange =(event) => {
        const file= event.target.files[0]
        if(file){
            //update the image state
            setImage(file)

            //generate preview URL from the file
            const preview=URL.createObjectURL(file)
            setPreviewURL(preview)

        }
    }

    const handleRemoveImage = () =>{
        setImage(null)
        setPreviewURL(null)
    }

    const onChooseFile =() =>{
        inputRef.current.click()
    }
  return (
    <div>
      <input 
      type="file"
      accept="image/*"
      ref={inputRef}
      onChange={handleImageChange}
      className='hidden'
      />

      {!image ? (
        <div className='w-20 h-20 flex items-center justify-center bg-purple-400 rounded-full relative'>
            <LuUser className='' />
            <button 
             type="button"
             className='w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 right-1'
             onClick={onChooseFile}
             >
            <LuUpload/>
            </button>
        </div>
       ):(
        <div className='relative'>
            <img 
            src={previewURL}
            alt="profile photo"
            className='w-20 h-20 rounded-full object-cover'
            />
            <button
            type="button"
            className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1'
            onClick={handleRemoveImage}
            >
            <LuTrash/>
            </button>
        </div>
       )}
    </div>
  )
}

export default ProfilePhotoSelector
