import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AutoCompleteContainer, AutoCompleteInput, Suggestion, SuggestionsContainer, SuggestionsList } from "../../Components/AutoCompleteComponents"


const AutoComplete = ({ suggestions, input, setInput }) => {

   let navigate = useNavigate()

   const { t } = useTranslation()

   const [filteredSuggestions, setFilteredSuggestions] = useState([])
   const [showSuggestions, setShowSuggestions] = useState(false)
   const [activeSuggestion, setActiveSuggestion] = useState(-1) // start at position -1 "input"

   const filtered = suggestions.filter((suggestion) =>
      suggestion.name.toLowerCase().indexOf(input.toLowerCase()) > -1  // -1 means that the value is not found
   )

   const onChange = (e) => {
      const userInput = e.target.value

      setInput(userInput)
      setFilteredSuggestions(filtered)
      if (filtered.length > 0) {
         setShowSuggestions(true)
         setActiveSuggestion(-1)
      } else {
         setShowSuggestions(false)
      }
   }

   const onClick = (e) => {
      setFilteredSuggestions([])
      setInput(e.target.innerText)
      setShowSuggestions(false)
   }

   const searchItem = (value) => {
      if (value) {
         navigate(`/search?q=${value}`)
      }
      setInput('')
   }

   const onKeyUp = (e) => {
      if (e.keyCode === 13) { // enter key
         if(activeSuggestion  > -1){ // if any suggesion is selected
            searchItem(filteredSuggestions[activeSuggestion].name)
         } else{
            searchItem(input)
         }
      }
   }

   const onKeyDown = (e) => {
      if (e.keyCode === 38) { // up key
         setActiveSuggestion((activeSuggestion - 1))
      } else if (e.keyCode === 40) { // down key
         setActiveSuggestion((activeSuggestion + 1) % filteredSuggestions.length)
      }
   }

   const SuggestionsListComponent = () => (
      <SuggestionsContainer>
         <SuggestionsList>
            {filteredSuggestions.map((suggestion, i) => (
               <Suggestion
                  key={suggestion._id}
                  onClick={onClick}
                  active={activeSuggestion === i}
               >
                  {suggestion.name}
               </Suggestion>
            )
            )}
         </SuggestionsList>
      </SuggestionsContainer>
   )

   useEffect(() => {
      // every time the index is less than 0 return it to the initial value
      if (activeSuggestion < 0) {
         setActiveSuggestion(-1)
      }
   }, [activeSuggestion])

   return (
      <AutoCompleteContainer>
         <AutoCompleteInput
            placeholder={t('Nav.Search')}
            type="text"
            onChange={onChange}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            value={input}
            open={input && showSuggestions}
         />
         {showSuggestions && input && <SuggestionsListComponent />}
      </AutoCompleteContainer>
   )
}

export default AutoComplete