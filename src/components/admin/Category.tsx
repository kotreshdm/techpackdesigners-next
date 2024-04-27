import React, { useEffect, useState } from "react";
import MyTable from "./adminComp/MyTable";
import DeleteModel from "./adminComp/DeleteModel";
import { Modal } from "flowbite-react";
import { toast } from "react-toastify";

// import ViewCategoryModel from "../../components/dashboard/ViewCategoryModel";
import AddCategoryModel from "./adminComp/AddCategoryModel";
import TableHeader from "./adminComp/TableHeader";
import { useAdminContext } from "./Dashboard";

const Category = () => {
  const { categories, categoryCurrentPage, setCategoryCurrentPage } =
    useAdminContext();

  const [loading, setLoading] = useState(false);
  const [addData, setAddData] = useState(false);
  const [viewData, setViewData] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  useEffect(() => {
    if (categories.length === 0) {
      getAllCategories();
    }
  }, []);
  const getAllCategories = async () => {
    // setLoading(true);
    // await getAllCategoriesAPI().then((response) => {
    //   if (response.status === 200) {
    //     setCategories(response.data);
    //   } else {
    //     toast.error(response.message);
    //   }
    // });
    // setLoading(false);
  };
  const columns = [
    { Header: "Category Id", accessor: "categoryId" },
    { Header: "Category Name", accessor: "name" },
    { Header: "Description", accessor: "description" },
    { Header: "Slug", accessor: "slug" },
  ];
  const addCategoryButton = () => {
    setAddData(true);
    setSelectedData({});
  };
  const deleteButton = (item: any) => {
    setDeleteData(true);
    setSelectedData(item);
  };
  // const handleDletecategory = async () => {
  //   await deleteCategoryAPI(selectedData.categoryId).then((response) => {
  //     if (response.status === 200) {
  //       getAllCategories();
  //       toast.success(`${selectedData.userName} Category successfully !!! `);
  //     } else {
  //       toast.error(response.message.sqlMessage);
  //     }
  //     setDeleteData(false);
  //   });
  //   setSelectedData({});
  // };
  const viewButton = (item: any) => {
    setViewData(true);
    setSelectedData(item);
  };
  const editButton = (item: any) => {
    setAddData(true);
    setSelectedData(item);
  };
  return (
    <div className='container grid grid-cols-1 gap-0'>
      <div>
        <TableHeader
          addNewRecord={addCategoryButton}
          tableHeader={"Categories"}
          refreshData={getAllCategories}
        />
      </div>
      <div>
        <MyTable
          columns={columns}
          data={categories}
          loading={loading}
          onDelete={deleteButton}
          onEdit={editButton}
          onView={viewButton}
          currentPage={categoryCurrentPage}
          setCurrentPage={setCategoryCurrentPage}
        />
      </div>
      <Modal
        show={addData}
        onClose={() => setAddData(false)}
        popup
        className='m-auto'>
        <AddCategoryModel
          closeDialog={() => setAddData(false)}
          refreshAfterSuccess={getAllCategories}
          selectedData={selectedData}
        />
      </Modal>
      {/*  <Modal
        show={deleteData}
        onClose={() => setDeleteData(false)}
        popup
        className='m-auto'>
        <DeleteModel
          handleSubmit={handleDletecategory}
          closeModel={() => setDeleteData(false)}
        />
      </Modal>
      <Modal
        show={viewData}
        onClose={() => setViewData(false)}
        popup
        className='m-auto'>
        <ViewCategoryModel
          selectedData={selectedData}
          closeModel={() => setViewData(false)}
        />
      </Modal> */}
    </div>
  );
};

export default Category;
