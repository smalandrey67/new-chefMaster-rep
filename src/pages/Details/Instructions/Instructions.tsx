import { FC } from 'react'

import { removeHtmlTags } from 'utils/removeHtmlTags'
import { motion } from 'constants/motion'

import * as Style from './Instructions.styled'
import { Paragraph } from 'assets/styled/Reused.styled'
import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'

import { InstructionsProps } from './Instructions.types'

export const Instructions: FC<InstructionsProps> = ({ details }) => {
  return (
    <>
      {!details?.summary.length && !details?.instructions.length ? (
        <ErrorNoResult description='No instructions here' height='25vh' />
      ) : null}

      <Style.DetailsInfoDescriptionWrapper {...motion}>
        <Paragraph margin={details?.summary && '0 0 10px 0'}>{removeHtmlTags(details?.summary)}</Paragraph>
        <Paragraph margin={details?.instructions && '0 0 10px 0'}>{removeHtmlTags(details?.instructions)}</Paragraph>
      </Style.DetailsInfoDescriptionWrapper>
    </>
  )
}
