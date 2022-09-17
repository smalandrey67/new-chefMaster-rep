import { FC } from 'react'

import ManShrugging from 'assets/images/main/man-shrugging.svg'
import { ErrorWrapper } from 'assets/styled/Reused.styled'
import { ErrorNoResultWrapperImage, ErrorNoResultImage, ErrorNoResultTitle } from './ErrorNoResult.styled'

import { ErrorNotResultProps } from './ErrorNoResult.types'

export const ErrorNoResult: FC<ErrorNotResultProps> = ({ description, height }) => {

   return (
      <ErrorWrapper height={height} flexDirection='column'>
         <ErrorNoResultWrapperImage>
            <ErrorNoResultImage src={ManShrugging} alt='man shrugging' />
         </ErrorNoResultWrapperImage>

         <ErrorNoResultTitle>{description}</ErrorNoResultTitle>
      </ErrorWrapper>
   )
}