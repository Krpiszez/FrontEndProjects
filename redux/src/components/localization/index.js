import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { toggleLanguage } from '../../store/localization/slice';
import { languagesList } from '../../utils/languages/lang';


const Localization = () => {

  const dispatch = useDispatch();

  const setCurrentLanguage = (langName) => {
    dispatch(toggleLanguage(langName))
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose Language
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          languagesList.map((lang, index) => (
          <Dropdown.Item 
          key={index}
          onClick={() => setCurrentLanguage(require(`../../utils/languages/${lang}.json`).code)}
          >
            {
              require(`../../utils/languages/${lang}.json`).name
            }
          </Dropdown.Item>))
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Localization