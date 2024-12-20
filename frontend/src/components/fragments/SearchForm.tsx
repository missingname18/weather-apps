import Input from "../elements/Input";
import Button from "../elements/Button";
import style from './styles/SearchForm.module.css';

interface SearchFormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  data: string;
  setData: (data: string) => void;
}

function SearchForm(props: SearchFormProps) {

  const { onSubmit, data, setData } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  }

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <Input placeholder="Search" value={data} onChange={handleChange} id="search"/>
      <Button type="submit" >Search</Button>
    </form>
  )
}

export default SearchForm