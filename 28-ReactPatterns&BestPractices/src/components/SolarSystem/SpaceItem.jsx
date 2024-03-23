export default function SPaceItem({ item }) {
  return (
    <article>
      {Object.keys(item).map((key, index) => {
        if (key !== 'name' && key !== 'type' && key !== 'image') {
          return (
            <div key={index} className='data'>
              <span>
                <b>{key}: </b>{' '}
              </span>
              <span>{item[key]}</span>
            </div>
          );
        }
      })}
    </article>
  );
}
