/* eslint-disable */
import React from 'react'
import styled from 'styled-components/macro'
import {
  withScriptjs
} from 'react-google-maps'
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox'

import IconSearch from 'app/assets/icons8-search.svg'

const WrapperInput = styled.div`
  height: 640px;

  @media (max-width: 960px) {
    height: 100%;
  } 

  label {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    font-family: OpenSans-Bold;
    font-size: 1.14rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #273d52;
    margin-bottom: 14px;
  }

  input {
    width: 100%!important;
    border: none;
    border-radius: 8px;
    padding: 10px 36px!important;
    background-color: #f5f5f6;
    box-shadow: none!important;
    font-family: OpenSans-SemiBold;
    font-size: 1rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #273d52;
    outline: none;

    &:placeholder {
      font-family: OpenSans-Regular;
      font-size: 14rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.36;
      letter-spacing: normal;
      color: #878b8f;
    }

    &::before {
      // content: "\f109";
      background-image: url(${IconSearch});
    }
  }
`

const WrapperBoxInput = styled.div`
  position: relative;

  img {
    position: absolute;
    width: 16px;
    top: 12px;
    left: 12px;
  }
`


const SearchGoogleMaps = withScriptjs(() => {
  let refs = {}
  const onSearchBoxMounted = ref => {
    refs.searchBox = ref
  }

  const onPlacesChanged = () => {
    window.location = '/store-list'
    console.log('places', refs.searchBox.getPlaces()[0].geometry.location.lat())
  }

  return (
    <WrapperInput>
      <label>
        Cari Lokasi Anda
      </label> 
      <WrapperBoxInput>
        <img src={IconSearch} alt="icon-search" /> 
        <StandaloneSearchBox
          ref={onSearchBoxMounted}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Customized your placeholder"
          />
        </StandaloneSearchBox>
      </WrapperBoxInput>
    </WrapperInput>
  )
})

export default SearchGoogleMaps