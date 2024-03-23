import SearchableList from '../components/SearchableList/SearchableList';
import { SOLARSYSTEM } from '../assets/solar-system/solarSystem';
import SolarSystem from '../components/SolarSystem/SolarSystem';

export default function SolarSystemPage() {
  return (
    // passing a function as children to a function component allows the parent to customize how its children are rendered
    <SearchableList
      items={SOLARSYSTEM}
      keyFn={(item) => item.name} // key functions takes a different value for the key
      label='Search the Universe'
    >
      {/* with RENDER PROPS we can handle the data differently for other component functions */}
      {(item) => <SolarSystem item={item} />}
    </SearchableList>
  );
}
