import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { GiShoppingCart, GiCheckMark } from "react-icons/gi";
function PricingComp() {
  return (
    <div className='container mx-auto pt-5 pb-3 pricing-table'>
      <h1 className='sub-heading text-center pb-4'>
        Clothing Manufacturing Packages
      </h1>
      <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-12'>
        <div className='rounded-b box box1'>
          <h2 className='heading'>Starter</h2>
          <div className='flex justify-between items-center cart-sec'>
            <div className='flex justify-start'>
              <h4 className='price'>$ 1,250</h4>
            </div>
            <div className='flex justify-end'>
              <div className='bg-white rounded-full p-6 icon-sction'>
                <GiShoppingCart size={50} />
              </div>
            </div>
          </div>
          <div className='pt-4'>
            <ul className='max-w-md space-y-1 list-inside '>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                2 Styles ( T-Shirts)
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                100 PCS Production
              </li>
              <li className='non-active'>
                <span>
                  <GiCheckMark />
                </span>
                Design &amp; Tech Packs Included
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                4 Sizes S, M, L, XL
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                2 Sample Shipping
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                1 Round of Fitting Adjustments
              </li>
              <li className='non-active'>
                <span>
                  <GiCheckMark />
                </span>
                1 Rounds of Fitting Adjustments
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                Fedex D2D Shipping Included
              </li>
            </ul>
            <div className='button-section'>
              <Link href='/contact'>
                <Button className='btn'>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='rounded-b box box2'>
          <h2 className='heading'>Second Package</h2>
          <div className='flex justify-between items-center cart-sec'>
            <div className='flex justify-start'>
              <h4 className='price'>$3,500</h4>
            </div>
            <div className='flex justify-end'>
              <div className='bg-white rounded-full p-6 icon-sction'>
                <GiShoppingCart size={50} />
              </div>
            </div>
          </div>
          <div className='pt-4'>
            <ul className='max-w-md space-y-1 list-inside '>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                5 Styles Collection
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                250 PCS Production
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                Design &amp; Tech Packs Included
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                4 Sizes S, M, L, XL
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                Line-Sheet Presentation
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                5 Samples
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                1 Rounds of Fitting Adjustments
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                Fedex D2D Shipping Included
              </li>
            </ul>
            <div className='button-section'>
              <Link href='/contact'>
                <Button className='btn'>Get Going</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='rounded-b box box3'>
          <h2 className='heading'>Full-Launch</h2>
          <div className='flex justify-between items-center cart-sec'>
            <div className='flex justify-start'>
              <h4 className='price'>$6,250</h4>
            </div>
            <div className='flex justify-end'>
              <div className='bg-white rounded-full p-6 icon-sction'>
                <GiShoppingCart size={50} />
              </div>
            </div>
          </div>
          <div className='pt-4'>
            <ul className='max-w-md space-y-1 list-inside '>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                10 Styles Collection
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                500 PCS Production
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                Design &amp; Tech Packs Included
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                5 Sizes S, M, L, XL, XXL
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                Line-Sheet Presentation
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                10 Samples
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                1 Rounds of Fitting Adjustments
              </li>
              <li className='active'>
                <span>
                  <GiCheckMark />
                </span>
                Fedex D2D Shipping Included
              </li>
            </ul>
            <div className='button-section'>
              <Link href='/contact'>
                <Button className='btn'>Get Going</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingComp;
