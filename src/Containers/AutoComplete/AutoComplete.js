import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AutoCompleteContainer, AutoCompleteInput, Suggestion, SuggestionsContainer, SuggestionsList } from "../../Components/AutoCompleteComponents"


const AutoComplete = ({ suggestions, input, setInput }) => {

   let navigate = useNavigate()

   const { t } = useTranslation()

   const [filteredSuggestions, setFilteredSuggestions] = useState([])
   const [showSuggestions, setShowSuggestions] = useState(false)

   const filtered = suggestions.filter((suggestion) =>
      suggestion.name.toLowerCase().indexOf(input.toLowerCase()) > -1
   )

   const onChange = (e) => {
      const userInput = e.target.value

      setInput(userInput)
      setFilteredSuggestions(filtered)
      if (filtered.length > 0) {
         setShowSuggestions(true)
      } else {
         setShowSuggestions(false)
      }
   }

   const onClick = (e) => {
      setFilteredSuggestions([])
      // setInput(e.target.innerText)
      searchItem(e.target.innerText)
      setShowSuggestions(false)
   }

   const searchItem = (value) => {
      if (value) {
         navigate(`/search?q=${value}`)
      }
      setInput('')
   }

   const onKeyUp = (e) => {
      if (e.keyCode === 13) {
         searchItem(input)
      }
   }

   const SuggestionsListComponent = () => (
      <SuggestionsContainer>
         <SuggestionsList>
            {filteredSuggestions.map((suggestion) => (
               <Suggestion key={suggestion._id} onClick={onClick}>
                  {suggestion.name}
               </Suggestion>
            )
            )}
         </SuggestionsList>
      </SuggestionsContainer>
   )

   return (
      <AutoCompleteContainer>
         <AutoCompleteInput
            placeholder={t('Nav.Search')}
            type="text"
            onChange={onChange}
            onKeyUp={onKeyUp}
            value={input}
            open={input && showSuggestions}
         />
         {showSuggestions && input && <SuggestionsListComponent />}
      </AutoCompleteContainer>
   )
}

export default AutoComplete