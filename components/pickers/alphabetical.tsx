import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { PickerContainer } from './container'

export const AlphabeticalPicker = () => {
  const router = useRouter()
  const [storedDate, setDate] = useState(dayjs())

  const alphabeticalPicker = <div></div>

  return (
    <PickerContainer
      params={{
        pickerElement: alphabeticalPicker,
        storedDate,
      }}
    />
  )
}
