import styled from 'styled-components'

export const DetailsCookingSubtitle = styled.h4`
    margin: 5px 0;
    padding: 10px;
    text-align: left;
    grid-auto-flow: column;
    font-size: var(--fs-sm);
`

export const DetailsCookingItem = styled.li`
    position: relative;
    box-shadow: var(--shadow);
    border-radius: var(--br-radius);
    background-color: var(--color-white);
    min-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5px;
`

export const DetailsCookingHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    cursor: pointer;
`

export const DetailsCookingStep = styled.span`
    font-size: var(--fs-sm);
    font-weight: var(--fw-semiBold);
`

export const DetailsCookingContent = styled.div`
    position: relative;
    height: 0;
    visibility: hidden;
    overflow: hidden;

    &.active{
        transition: all 0.3s ease;
        padding: 0 10px 10px 10px;
        height: auto;
        visibility: visible;
    }
`

export const DetailsCookingIngredients = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    overflow: auto;
    margin-bottom: 5px;

    &.hide{
        display: none;
    }
`

export const DetailsCookingIngredientsPhoto = styled.img`
    height: 100%;
    width: 50px;
    object-fit: contain;
    &:not(:last-child){
        margin-right: 5px;
    }
`