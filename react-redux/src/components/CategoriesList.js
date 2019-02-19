import { Link } from 'react-router-dom';
import React from 'react';

const CategoriesList = props => {
  if (!props.categories) return (<div className="article-preview">Loading categories...</div>);

  if (props.categories.length === 0) {
    return (<div className="article-preview">No categories are here... yet.</div>);
  }

  return (
    <section>
      {
        props.categories.map(categories => {
          return (
            
              <Link to={`/devices/category/${categories.name}`} className="categories" key={categories.name}>
                <span className="button font-family__coiny"><span>{categories.name}</span> </span>
              </Link>
            
          );
        })
      }

    </section>
  );
};

export default CategoriesList;
