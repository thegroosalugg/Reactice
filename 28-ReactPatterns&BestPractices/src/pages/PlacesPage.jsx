import { PLACES } from '../assets/places/places';
import Place from '../components/Place';
import SearchableList from '../components/SearchableList/SearchableList';

export default function PlacesPage() {
  return (
    <SearchableList
      items={PLACES}
      keyFn={(item) => item.id}
      label='Search the World'
    >
      {(item) => <Place {...item} />}
    </SearchableList>
  );
}
