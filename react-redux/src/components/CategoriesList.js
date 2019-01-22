import { Link } from 'react-router-dom';
import React from 'react';

const CategoriesList = props => {
  console.log("PROPS CATEGORIES", props);
  if (!props.categories) return (<div className="article-preview">Loading categories...</div>);

  if (props.categories.length === 0) {
    return (<div className="article-preview">No categories are here... yet.</div>);
  }

  return (
    <div>
      {
        props.categories.map(categories => {
          console.log("CATEGORIESLIST", categories);
          return (
            <label>
              <Link to={`/devices/category/${categories.name}`} className="preview-link">
                <p><strong>{categories.name}</strong></p>
              </Link>
            </label>
          );
        })
      }

    </div>
  );
};

export default CategoriesList;
