import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import * as Style from './Answer.styled'
import {
  ErrorMessage,
  SpinnerWrapper,
  Spinner,
  Strong,
  Legend,
  FlexGroup,
  Group,
  Label,
  Input,
  Flex,
  Button,
  Image
} from 'assets/styled/Reused.styled'
import SpinnerSm from 'assets/images/icons/spinner-sm.svg'

import { PopupContainer } from 'components/containers/PopupContainer/PopupContainer'
import { FormContainer } from 'components/containers/FormContainer/FormContainer'
import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'

import { IoCloseSharp } from 'react-icons/io5'
import { BiError } from 'react-icons/bi'

import { SubmitAnswerType, AnswerProps } from 'types/Answer'
import { useLazyGetAnswerQuery } from 'services/RecipesService'
import { validation } from 'constants/validation'

export const Answer: FC<AnswerProps> = ({ popupHandler }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<SubmitAnswerType>({ mode: 'onChange' })
  const [fetchAnswer, { data, error, isLoading, isSuccess }] = useLazyGetAnswerQuery()

  const submitAnswerHandler: SubmitHandler<SubmitAnswerType> = (data): void => {
    fetchAnswer(data.question)

    reset()
  }

  return (
    <PopupContainer>
      <FormContainer handleSubmit={handleSubmit} submitHandler={submitAnswerHandler}>
        <Style.AnswerHeader>
          <Legend>Quick answer</Legend>
          <IoCloseSharp onClick={popupHandler} size='23' cursor='pointer' />
        </Style.AnswerHeader>

        <Style.AnswerExample>
          <Strong fontSize='var(--fs-sm)'>Example:</Strong>
          How much vitamins c is in 2 apples
        </Style.AnswerExample>
        <Flex>
          <FlexGroup margin='0 10px 0 0' flex='0 1 70%' height='50px'>
            <Label>
              <Input {...register('question', validation.question)} placeholder='Question' type='text' />
            </Label>
          </FlexGroup>

          <FlexGroup flex='0 1 30%' height='50px'>
            <Button type='submit' name='submit'>
              ask
            </Button>
          </FlexGroup>
        </Flex>

        {errors?.question && (
          <ErrorMessage margin='5px 0 0 0' justifyContent='flex-start'>
            {errors?.question?.message}
          </ErrorMessage>
        )}
      </FormContainer>

      {isLoading && (
        <SpinnerWrapper height='15vh'>
          <Spinner src={SpinnerSm} alt='spinner' />
        </SpinnerWrapper>
      )}

      {isSuccess && Object.keys(data?.answer || {}).length ? (
        <Style.AnswerResult>
          <Group width='150px' height='150px'>
            <Image src={data?.image} alt='Product' objectFit='contain' />
          </Group>
          {data?.answer}
        </Style.AnswerResult>
      ) : null}

      {isSuccess && !Object.keys(data?.answer || {}).length ? (
        <ErrorNoResult description='Nothing was found' height='23vh' />
      ) : null}

      {error && (
        <ErrorMessage margin='5px 0 0 0'>
          <BiError />
          Server Error
        </ErrorMessage>
      )}
    </PopupContainer>
  )
}
