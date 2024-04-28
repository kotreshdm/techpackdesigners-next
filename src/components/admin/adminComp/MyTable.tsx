import React from "react";
import { useTable, usePagination } from "react-table";
import "./MyTableStyles.css";
import {
  FcViewDetails,
  FcEditImage,
  FcAddImage,
  FcFullTrash,
  FcSynchronize,
  FcAddRow,
} from "react-icons/fc";
import LoadingRecords from "./LoadingRecords";
import { Banner, Button, Pagination, Tooltip } from "flowbite-react";
import { useAdminContext } from "../Dashboard";
const MyTable = ({
  addNewRecord,
  columns,
  currentPage,
  data,
  loading,
  onDelete,
  onEdit,
  onEditDescription,
  onView,
  setCurrentPage,
  tableHeader,
  refreshData,
}: any) => {
  const { pageSize } = useAdminContext();

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const onPageChange = (page: any) => setCurrentPage(page);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  const { rows, getTableProps, getTableBodyProps, headerGroups, prepareRow } =
    useTable({ columns, data }, usePagination);
  return (
    <div className='container mx-auto'>
      <div
        className='grid grid-cols-1 gap-4'
        style={{
          maxWidth: "90%",
          margin: "10px auto",
          height: "415px",
          overflowX: "auto",
        }}>
        <div>
          <table {...getTableProps()} className='container mx-auto'>
            <thead>
              {headerGroups.map((headerGroup: any, index: number) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  <th style={{ width: "100px" }}>SL No</th>
                  {headerGroup.headers.map((column: any, inIndex: number) => (
                    <th
                      style={{ width: "100px" }}
                      {...column.getHeaderProps()}
                      key={inIndex}>
                      {column.render("Header")}
                    </th>
                  ))}
                  <th style={{ width: "100px" }}>Action</th>
                </tr>
              ))}
            </thead>
            {loading ? (
              <LoadingRecords />
            ) : (
              <tbody {...getTableBodyProps()}>
                {rows.map((row: any, index: number) => {
                  const serialNumber = index + 1;
                  if (index >= startIndex && index < endIndex) {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} key={index}>
                        <td>{serialNumber}</td>
                        {row.cells.map((cell: any, inIndex: number) => (
                          <td
                            key={inIndex}
                            {...cell.getCellProps()}
                            className='truncate max-w-xs'>
                            {cell.render("Cell")}
                          </td>
                        ))}
                        <td className='action-buttons'>
                          {onView && (
                            <Tooltip content='View'>
                              <button onClick={() => onView(row.original)}>
                                <FcViewDetails />
                              </button>
                            </Tooltip>
                          )}
                          {onEdit && (
                            <Tooltip content='Edit'>
                              <button onClick={() => onEdit(row.original)}>
                                <FcEditImage />
                              </button>
                            </Tooltip>
                          )}
                          {onEditDescription && (
                            <Tooltip content='Edit Description'>
                              <button
                                onClick={() => onEditDescription(row.original)}>
                                <FcAddImage />
                              </button>
                            </Tooltip>
                          )}
                          {onDelete && (
                            <Tooltip content='Delete'>
                              <button onClick={() => onDelete(row.original)}>
                                <FcFullTrash />
                              </button>
                            </Tooltip>
                          )}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 container w-11/12 m-auto'>
        <div className='p-1 flex justify-start'>
          <p>
            Showing {startIndex + 1} to {endIndex} of {totalItems} entries
          </p>
        </div>
        <div className='p-1 flex justify-end'>
          <Pagination
            layout='pagination'
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            previousLabel='Prev'
            nextLabel='Next'
            showIcons
          />
        </div>
      </div>
    </div>
  );
};
export default MyTable;
