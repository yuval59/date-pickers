import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { PickerContainer } from './container'

export const RandomPicker = () => {
  const router = useRouter()
  const [storedDate, setDate] = useState(dayjs())

  const randomPicker = (
    <div className='grid grid-cols-3 grid-rows-2'>
      <p className='col-span-3 text-center'>Is this the date?</p>

      <button
        className='px-5 py-3 rounded-full font-semibold bg-sky-500 hover:bg-sky-500/80'
        onClick={() => setDate(dayjs.unix(randomIntBetween(0, dayjs().unix())))}
      >
        No, reroll
      </button>

      <div></div>

      <button
        className='px-5 py-3 rounded-full font-semibold bg-sky-500 hover:bg-sky-500/80'
        onClick={() => router.push('/')}
      >
        Yes, select it (return to menu)
      </button>
    </div>
  )

  return (
    <PickerContainer
      params={{
        storedDate,
        pickerElement: randomPicker,
      }}
    />
  )
}

const randomIntBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)
