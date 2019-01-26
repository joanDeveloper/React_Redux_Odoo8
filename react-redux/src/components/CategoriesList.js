import { Link } from 'react-router-dom';
import style from '../assets/css/styles';
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
            <Link to={`/devices/category/${categories.name}`} className="preview-link" key={categories.name}>
              <strong style={style.button}>{categories.name} </strong>
            </Link>
          );
        })
      }

    </div>
  );
};

export default CategoriesList;
