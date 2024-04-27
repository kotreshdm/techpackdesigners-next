import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { CircularProgressbar } from "react-circular-progressbar";
import ReactQuill from "react-quill";
import { Button, Modal, TextInput } from "flowbite-react";
// import { addEditCategoryAPI } from "./apiConfig/categoriesAPIConfig";
import Constants from "@/utils/Constants";
// import MyBucket from "../../utils/MyBucket";

const initialFormData = { name: "", slug: "", description: "" };
const AddCategoryModel = ({
  closeDialog,
  refreshAfterSuccess,
  selectedData,
}: any) => {
  const [formData, setFormData] = useState(initialFormData);
  const filePickerRef = useRef();

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);

  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  //   const handleImageChange = (e: any) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       setImageFile(file);
  //       setImageFileUrl(URL.createObjectURL(file));
  //     }
  //   };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    let data = { ...formData };
    if (formData.name) {
      data.slug = formData.name
        .split(" ")
        .join("-")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9-]/g, "");
    }

    let url = "/api/categories";

    try {
      if (Object.keys(formData).length === 0) {
        toast.error("No changes made");
        return;
      }
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const response = await res.json();
      console.log("response", response);

      if (!response.success) {
        toast.error(response.message);
      }
      if (response.success) {
        toast.success(response.message);
        closeDialog();
      }
    } catch (error: any) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Modal.Header className='m-2 text-lg text-gray-500 dark:text-gray-400'>
        {selectedData.categoryId ? "Edit" : "Add"} Category
      </Modal.Header>
      <Modal.Body>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
              type='text'
              placeholder='Title'
              required
              id='name'
              className='flex-1'
              defaultValue={selectedData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          {/* <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            ref={filePickerRef}
            hidden
          /> */}
          {/* <div
            className='relative h-32 self-center cursor-pointer shadow-md overflow-hidden'
            onClick={() => filePickerRef.current.click()}>
            {imageFileUploadProgress && (
              <CircularProgressbar
                value={imageFileUploadProgress || 0}
                text={`${imageFileUploadProgress}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${
                      imageFileUploadProgress / 100
                    })`,
                  },
                }}
              />
            )}
            <img
              src={
                imageFileUrl ||
                selectedData.catBanner ||
                "https://placehold.co/600x400"
              }
              alt='user'
              className={` w-full h-full object-cover border-4 border-[lightgray] ${
                imageFileUploadProgress &&
                imageFileUploadProgress < 100 &&
                "opacity-60"
              }`}
            />
          </div> */}
          <div>
            <ReactQuill
              theme='snow'
              placeholder='Category description...'
              className='h-40 mb-12'
              defaultValue={selectedData.description}
              onChange={(value) => {
                setFormData({ ...formData, description: value });
              }}
            />
          </div>
          <div className={`grid grid-cols-2 gap-1`}>
            <Button onClick={closeDialog}>Close</Button>
            <Button type='submit' color='purple'>
              {selectedData?.categoryId > -1
                ? "Update Category"
                : "Create New Category"}
            </Button>
          </div>
        </form>
      </Modal.Body>
    </>
  );
};

export default AddCategoryModel;
