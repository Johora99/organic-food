'use client'
import React, { useState } from 'react'
import { Range } from 'react-range'

export default function PriceRange() {
  const [values, setValues] = useState([0, 1500])
  const min = 0
  const max = 1500

  return (
    <div>
      <h3 className='mb-3 text-xl font-medium text-darkGray'>Price</h3>
      <div className='py-3'>
        <Range
          step={1}
          min={min}
          max={max}
          values={values}
          onChange={(newValues) => setValues(newValues)}
          renderTrack={({ props, children }) => {
            const left = (values[0] / max) * 100
            const right = (values[1] / max) * 100

            return (
              <div
                {...props}
                className='w-full mb-3'
                style={{
                  ...props.style,
                  height: '6px',
                  borderRadius: '3px',
                  background: `linear-gradient(to right, #e0e0e0 0%, #e0e0e0 ${left}%, #00B207 ${left}%, #00B207 ${right}%, #e0e0e0 ${right}%, #e0e0e0 100%)`,
                }}
              >
                {children}
              </div>
            )
          }}
          renderThumb={({ props }) => (
            <div
              {...props}
              className='bg-white border-[2px] border-pureGreen rounded-full active:border-pureGreen'
              style={{
                ...props.style,
                height: '16px',
                width: '16px',
              }}
            />
          )}
        />
        
        <div className='pt-3'>
          <p className='text-darkGray2 text-sm'>
            Price: <span className='text-darkGray'>${values[0]} - ${values[1]}</span>
          </p>
        </div>
      </div>
      <div className='w-full border-b-[1px] border-lighterGray my-3'></div>
    </div>
  )
}
