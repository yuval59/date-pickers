import { FORMATS } from '@/constants'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)

// The point is to have a primitive for every date picker,
// So I can implement just the date picker and that's it, and have the display and hooks pre-configured

// DRY DRY DRY

type PickerContainerProps = {
  params: {
    storedDate: dayjs.Dayjs
    pickerElement: JSX.Element
    hideDate?: boolean
  }
}

export const PickerContainer = (props: PickerContainerProps) => {
  const { storedDate, pickerElement, hideDate } = props.params

  return (
    <div className='flex min-h-screen flex-col items-center justify-around p-24'>
      <div hidden={hideDate}>
        The selected date is: {storedDate.format(FORMATS.HUMAN_DATE)}
      </div>
      {pickerElement}
    </div>
  )
}
