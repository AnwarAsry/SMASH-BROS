import FormStyles from "@/styles/Form.module.scss"


export const SearchForm = () => {
    return <>
        <form className={FormStyles.SearchForm} action="#" method='get'>
            <input className={FormStyles.SearchFormInput} type="text" placeholder='Search Fighter..' />
        </form>
    </>
}