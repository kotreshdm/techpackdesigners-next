import { Spinner } from "flowbite-react";

export default function LoadingComp() {
  return (
    <div className='flex justify-center mt-50 p-20'>
      <Spinner aria-label='Default status example' />
    </div>
  );
}
