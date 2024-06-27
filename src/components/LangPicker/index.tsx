import {useTranslation} from 'react-i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
const browserLang = new I18nextBrowserLanguageDetector()
const defaultLang = browserLang.detect();

const LangPicker = () => {
    const {i18n} = useTranslation()
    return (
        <div>
            <select
                defaultValue={defaultLang}
                className={'select select-bordered select-sm w-full max-w-xs'}
                onChange={(evt) => {
                    // console.log('evt.target.value', evt.target.value)
                    if (evt.target.value) {
                        i18n.changeLanguage(evt.target.value).catch(console.error)
                    }
                }}>
                <option value={'zh'}>简中</option>
                <option value={'en'}>Eng</option>
            </select>
        </div>
    )
}

export default LangPicker;